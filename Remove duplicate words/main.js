function removeDuplicateWords (s) {
    const set = new Set(s.split(' '));
    return [...set].join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma'));