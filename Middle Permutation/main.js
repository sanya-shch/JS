function make(arr, el) {
    const len = arr.length;
    const res = [];

    for(let i = len; i >= 0; i--) {
        res.push(
            ([]).concat(
                arr.slice(0, i),
                [el],
                arr.slice(i)
            )
        );
    }

    return res;
}

function combinations(arr) {
    let prev, curr, el, i;
    const len = arr.length;

    curr = [[arr[0]]];

    for(i = 1; i < len; i++) {
        el = arr[i];
        prev = curr;
        curr = [];

        prev.forEach(function(item) {
            curr = curr.concat(
                make(item, el)
            );
        });
    }

    return curr;
}

function middlePermutation(s) {
    const comb = combinations(s.split('')).map((arr) => arr.join('')).sort();

    const n = comb.length / 2;

    return comb[n-1];
}

console.log(middlePermutation("abc")); // "bac"
console.log(middlePermutation("abcd")); // "bdca"
console.log(middlePermutation("abcdx")); // "cbxda"

// console.log(middlePermutation("blzrgwmetqvojnaspikchf"));