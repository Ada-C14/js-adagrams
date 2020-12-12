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

const LETTER_SCORES = {
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

class Adagrams {
  drawLetters() {
    const allLetters = [];

    for (const [letter, count] of Object.entries(ALL_LETTERS)) {
      for (let i = 0; i < count; i++) {
        allLetters.push(letter); 
      }
    }    
    
    // Return a random collection with 10 elements
    return shuffle.pick(allLetters, { picks: 10 }); 
  }

  countLetters(lettersArray) {
    const letterCount = {};

    lettersArray.forEach(letter => {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    })
    
    return letterCount;
  }

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length) {
      return false;
    } 

    const handCount = this.countLetters(lettersInHand);
    const inputCount = this.countLetters(input.split(''));

    for (const [letter, count] of Object.entries(inputCount)) {
      if (!handCount[letter] || count > handCount[letter]) {
        return false;
      }
    }

    return true;
  }

  scoreWord(word) {
    const score = word.toUpperCase().split('').reduce((score, letter) => score + LETTER_SCORES[letter], 0);

    return word.length >= 7 ? score + 8 : score;
  }

  highestScoreFrom(words) {
    let highestScore = { word: "", score: 0 };
    
    words.forEach(word => {
      const wordValue = this.scoreWord(word);
      const isGreaterValue = wordValue > highestScore.score;
      const isEqualValue = wordValue == highestScore.score;
      const isShorterLength = word.length < highestScore.word.length;
      const isLengthTen = word.length == 10;
      const isOldLengthNotTen = highestScore.word.length != 10;

      if (isGreaterValue || (isEqualValue && ((isShorterLength || isLengthTen) && isOldLengthNotTen))) {
        highestScore.score = wordValue;
        highestScore.word = word;
      }
    }) 

    return highestScore
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;