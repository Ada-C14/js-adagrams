
const letterPool = { 
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
    // wave 1

  createArray() {
    const lettersInPool = []
    for (const [letter, frequency] of Object.entries(letterPool)) {
      for (let i=0; i < frequency; i++) {
        lettersInPool.push(letter);
      }
    }
    return lettersInPool;
  },

  shuffleArray() {
    const letters = Adagrams.createArray()
    for (let i = letters.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
  },

  drawLetters() {
    const letters = Adagrams.shuffleArray()
    let lettersInHand = []
    for (let i = 0; i < 10; i += 1) {
      lettersInHand.push(letters.pop());
    }
    return lettersInHand
  },

  // Wave 2

  usesAvailableLetters(input, lettersInHand) {
    let lettersInHandCopy = [...lettersInHand];

    for (const i of input) {
      if (!lettersInHandCopy.includes(i)) {
        return false;
      } else {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(i), 1);
      }
    }
    return true;
  },

  // Wave 3

  scoreWord(word) {
    const scores = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10  
      };

    word = word.toUpperCase();
    let score = 0;
    for (const char of word) {
      score += scores[char];
    }
  
    if (word.length >= 7) {
      score += 8;
    }
  
    return score;
  }
}


// Do not remove this line or your tests will break!
export default Adagrams;
