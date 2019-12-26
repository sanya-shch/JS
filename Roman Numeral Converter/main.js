function convertToRoman(num) {
    const roman = [
        [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ],
        [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' ],
        [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM' ],
        [ 'M', 'MM', 'MMM' ]
    ];

    let result = [];

    let n = num.toString().split('').reverse();

    for(let i = 0, len = n.length; i < len; i++){
        result.push(roman[i][n[i]-1]);
    }
    return result.reverse().join('');
}

console.log(convertToRoman(1004));
