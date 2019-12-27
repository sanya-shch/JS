function checkCashRegister(price, cash, cid) {
    const clone = JSON.parse( JSON.stringify( cid ) );
    clone.reverse();

    const values = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    const cmp = cash - price;
    let cmpCopy = cmp;

    const result = { status: '', change: [] };

    let i = 0;
    clone.forEach(x => {
        if(values[x[0]] < cmp && cmpCopy > 0 && cmpCopy > values[x[0]]) {
            result.change.push([x[0], 0]);
            result.status = "OPEN";
            while (cmpCopy - values[x[0]] >= 0 && x[1] - values[x[0]] >= 0) {
                x[1] = (x[1] - values[x[0]]).toFixed(2);
                cmpCopy = (cmpCopy - values[x[0]]).toFixed(2);
                result.change[i][1] += values[x[0]];
            }
            i++;
        }
    });

    if (cmpCopy > 0.01) {
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
    } else if (clone.every(x => x[1] < .01)) {
        result.status = 'CLOSED';
        result.change = cid;
    }

    return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
