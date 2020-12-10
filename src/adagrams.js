const Adagrams = {
// WAVE 1
  drawLetters() {
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
  
  let letters = Object.keys(letterPool);
  let handOfLetters = [];

// draw 10 random letters 
  while (handOfLetters.length < 10) {
    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      if (letterPool[randomLetter] > 0) {
          letterPool[randomLetter] -= 1;
          handOfLetters.push(randomLetter);
        }
      }
      return handOfLetters; 
    },

  // WAVE 2
  usesAvailableLetters(input, lettersInHand) {
    let inputArr = input.toUpperCase().split('');

    for(let char of inputArr){
      if (lettersInHand.includes(char)) {
        let index = lettersInHand.indexOf(char);
        lettersInHand.splice(index, 1);
      } else {
        return false; 
      }
    }
    return true;
  }, 

  // WAVE 3
  scoreWord(word) {
    const scoreChart = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    }

    let score = 0;
    let wordArr = word.toUpperCase().split('');

    for(let char of wordArr) {
      for (const [scoreNum, value] of Object.entries(scoreChart)) {
        if(value.includes(char)){
          score += Number(scoreNum);
        }
      }
    }
    if(wordArr.length >= 7) {
      score += 8;
    }
    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
