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
    const letters = [];

    for (const [key, value] of Object.entries(LETTERHASH)) {
      for (let i = 0; i < value + 1; i += 1) {
        letters.push(key);
      }
    }

    letters.sort(function(a, b) {return 0.5 - Math.random()});
    return letters.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputSplit = input.split('');
    const lettersInHandCopy = [...lettersInHand];
    
    for (let letter of input) {
      if (!lettersInHandCopy.includes(letter)) {
        return false;
      } else {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      }
    }
    return true;
  }


};

// Do not remove this line or your tests will break!
export default Adagrams;
