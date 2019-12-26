function rot13(str) {
    let result = "";

    function mod(n, p){
        if ( n < 0 ) n = p - Math.abs(n) % p;
        return n % p;
    }

    for(let i = 0, len = str.length; i < len; i++){
        let code = str.charCodeAt(i);

        if (code >= 65 && code <= 65 + 26 - 1){
            code -= 65;
            code = mod(code + 13, 26);
            code += 65;
        }

        result += String.fromCharCode(code);
    }

    return result;
}

// or

// function rot13(str) {
//     const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//
//     const iter = (str, acc) => {
//         if (str.length===0)
//             return acc;
//
//         if (! /^[A-Z]*$/.test(str[0]))
//             return iter(str.substring(1), acc+str[0]);
//
//         for (let i=0; i<26;i++){
//             if ( (alph[i]===str[0]) && (i>12) )
//                 return iter(str.substring(1), acc + alph[i-13]);
//             if ( (alph[i]===str[0])&& (i<13) )
//                 return  iter(str.substring(1), acc + alph[i+13]);
//         }
//     };
//
//     return iter(str,'');
// }

console.log(rot13("SERR PBQR PNZC"));