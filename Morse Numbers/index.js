const input = '---.. T---.. -.... T..---   R--------.. ...-- E----- ----.   R--------.. R....------ E.--.- .----   R......---- -.... .---- -....';
// const output = '1268 9309 9281 3616';

const morseNumbers = [
  '-----', // 0
  '.----', // 1
  '..---', // 2
  '...--', // 3
  '....-', // 4
  '.....', // 5
  '-....', // 6
  '--...', // 7
  '---..', // 8
  '----.', // 9
];

const groups = input.split(/\s{3}/);

const decodeCipher = (type, s) => {
  const morse = s.substr(1);
  switch (type) {
    case 'T':
      return morse.split('').reverse().join('');
    case 'E':
      return morse[morse.length - 1] + morse.substr(1, morse.length - 2) + morse[0];
    case 'R':
      return morse.split('').filter((_, i) => (i + 1) % 2).join('');
    default:
      return s;
  }
};

const getNumberByMorse = morse => {
  return morseNumbers.indexOf(morse);
};

const decodeGroup = group => group.map(c => {
  let decoded = getNumberByMorse(c);
  if (['T', 'R', 'E'].indexOf(c[0]) >= 0) {
    const m = decodeCipher(c[0], c);
    decoded = getNumberByMorse(m);
  }
  return decoded;
});

const result = groups.map(group => decodeGroup(group.split(' ')).join('') ).join(' ');

console.log(result);