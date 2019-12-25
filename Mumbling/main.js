function accum(s) {
    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    // or

    const arr = s.split('');
    let result = arr[0].toUpperCase();
    const len = arr.length;

    for (let i = 1; i < len; i++){
        result += '-' + arr[i].toUpperCase() + ''.padEnd(i,arr[i].toLowerCase());
    }

    return result;
}

console.log(accum("abcd")); // -> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // -> "C-Ww-Aaa-Tttt"