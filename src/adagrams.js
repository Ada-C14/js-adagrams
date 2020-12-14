const Adagrams = {
  lettersFrequency: { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1,
    K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 },

  drawLetters() {
    // Implement this method for wave 1
    let letterArray = [];
    for (const letter in this.lettersFrequency) {
      for (let i = 1; i <= this.lettersFrequency[letter]; i++){
        letterArray.push(letter);
      }
    }
    let lettersInHand = [];
    for (let i = 0; i < 10; i++) {
      let randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
      lettersInHand.push(randomLetter);
    }
    return lettersInHand;
  },

  usesAvailableLetters(input,lettersInHand) {
    let lettersCopy = [...lettersInHand];
    for (const letter of input.toUpperCase()) {
      if(!lettersCopy.includes(letter)) {
        return false;
      } else {
        lettersCopy.splice(lettersCopy.indexOf(letter), 1);
      }
    }
    return true;
  },
};

console.log(Adagrams.drawLetters);
// Do not remove this line or your tests will break!
export default Adagrams;
