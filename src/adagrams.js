const LETTERHASH = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1
}

const Adagrams = {
  drawLetters() {
  var letters = [];
  
  for (const [key, value] of Object.entries(LETTERHASH)) {
    for (let i = 0; i < value + 1; i += 1) {
      letters.push(key);
    }
  }

  const sampleTen = []
  for (let i = 0; i < 10; i += 1) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    sampleTen.push(randomLetter)
  }
  return sampleTen;

  },
};

console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
