
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
    // code here
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
