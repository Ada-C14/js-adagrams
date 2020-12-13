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
};

const scoreChart = {
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
}


const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterArray = [];

    for (const letter in letterPool) {
      for (let i = 0; i < letterPool[letter]; i++) {
        letterArray.push(letter);
      }
    }

    const hand = [];

    for (let i = 0; i < 10; i++) {
      const randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
      hand.push(randomLetter);
    }

    return hand;
  },
    // Implement this method for wave 2

  usesAvailableLetters(input, lettersInHand) {
    let inputArray = input.toUpperCase().split('');

      for(let char of inputArray){
        if (lettersInHand.includes(char)) {
          let index = lettersInHand.indexOf(char);
          lettersInHand.splice(index, 1);
        } else {
          return false;
        }
      }
    return true;
  },

     // Implement this method for wave 3

  scoreWord(word) {
    let score = 0;
    for (const letter of word.toUpperCase().split('')) {
      score += scoreChart[letter];
    }

    if (word.length >= 7) {
      score += 8;
    } 
  
    return score;
  },


  
};


// Do not remove this line or your tests will break!
export default Adagrams;
