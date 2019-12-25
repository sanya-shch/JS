function switcher(x){
    let result = '';

    const obj = {
        '26': 'a', '25': 'b', '24': 'c', '23': 'd', '22': 'e', '21': 'f', '20': 'g',
        '19': 'h', '18': 'i', '17': 'j', '16': 'k', '15': 'l', '14': 'm', '13': 'n',
        '12': 'o', '11': 'p', '10': 'q', '9': 'r', '8': 's', '7': 't', '6': 'u',
        '5': 'v', '4': 'w', '3': 'x', '2': 'y', '1': 'z',
        '27': '!', '28': '?', '29': ' '
    };

    return x.map(item => obj[item]).join('');
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'

//or

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? ';
const switcher2 = x => x.map(item => alpha[item]).join('');

console.log(switcher2(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'