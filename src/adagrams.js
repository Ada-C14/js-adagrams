class Adagrams  {
  static letterPool() {
    return {
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
      O: 9, 
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
      Z: 1,
    };
  }

  static drawLetters() {
    // create an array from letter pool
    const letterArray = [];
    for(const letter in this.letterPool()) {
      for(let i = 0; i < this.letterPool()[letter]; i++) {
        letterArray.push(letter);
      }
    }

    const hand = [];

    // pick a random letter, add to hand, remove from array
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * letterArray.length)
      hand.push(letterArray[index])
      letterArray.splice(index, 1) 
    }

    return hand;
  }

  static usesAvailableLetters(input, lettersInHand) {
    const letterObject = {}
    for(const letter of lettersInHand) {
      if (letterObject.hasOwnProperty(letter)) letterObject[letter] += 1;
      else letterObject[letter] = 1;
    }

    for(const letter of input) {
      if (letterObject.hasOwnProperty(letter) && letterObject[letter] >= 1) letterObject[letter] -= 1;
      else return false;
    }

    return true;
  }

  static scoreWord(word) {
    let score = 0;
    for(const letter of word.toUpperCase()) {
      score += this.scoreLetter(letter);
    }
    if (word.length >= 7) score += 8;

    return score
  }

  static scoreLetter(letter) {
    switch(letter) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'S':
      case 'T':
        return 1;
      case 'D':
      case 'G':
        return 2;
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        return 3;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        return 4;
      case 'K':
        return 5;
      case 'J':
      case 'X':
        return 8;
      case 'Q':
      case 'Z':
        return 10;
    }
  }

  static highestScoreFrom(words) {
    // calculate scores for each word and simultaneously keep track of max score and winning word.
    const winner = {
      score: 0
    }

    // loop through each word in words to calculate the score
    for (const word of words) {
      const currentScore = this.scoreWord(word);
      // if the score of the word is greater, replace word & score inside of winner object
      if  (currentScore > winner.score) {
        winner.score = currentScore;
        winner.word = word;
      // if it's a tie AND the word length is not equal to current winner word length AND the current winner word length is not 10
      } else if (currentScore === winner.score && word.length != winner.word.length && winner.word.length != 10) { 
        // check if current word length is 10 OR if the length is less than current winner word length
        if (word.length === 10 || word.length < winner.word.length ) winner.word = word;
      }
    }
    return winner;
  }
};
// Do not remove this line or your tests will break!
export default Adagrams;
