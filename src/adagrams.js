import shuffle from 'shuffle-array';

const ALL_LETTERS = {
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
    const allLetters = [];

    for (const [letter, count] of Object.entries(ALL_LETTERS)) {
      for (let i = 0; i < count; i++) {
        allLetters.push(letter); 
      }
    }    
    
    // Return a random collection with 10 elements
    return shuffle.pick(allLetters, { picks: 10 }); 
  },
  countLetters(lettersArray) {
    const letterCount = {};

    lettersArray.forEach(letter => {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    })
    
    return letterCount;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;