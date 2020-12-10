class Adagrams {
  static drawLetters() {
    const letters = {
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

    let lettersArray = [];

    for (const letter in letters) {
      for (let i = 0; i < letters[letter]; i += 1) {
        lettersArray.push(letter);
      }
    }

    let drawnLetters = [];
    for (let i = 0; i < 10; i += 1) {
      const randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
      drawnLetters.push(randomLetter);
    }

    return drawnLetters;
  }

  static usesAvailableLetters(input, lettersInHand) {
    let lettersPlayed = input.toUpperCase().split('');

    let lettersInHandHash = {};

    for (let letter of lettersInHand) {
      if (lettersInHandHash[letter]) {
        lettersInHandHash[letter] += 1;
      } 
      else {
        lettersInHandHash[letter] = 1;
      }
    }

    for (let letter of lettersPlayed) {
      if (lettersInHandHash[letter]) {
        lettersInHandHash[letter] -= 1; 
      }
      else if (!lettersInHand.includes(letter) || lettersInHandHash[letter] <= 0) {
        return false;
      }
    }

    return true; 
  } 

  static scoreWord(word) {
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
  }

  let characters = word.toUpperCase().split('');
  let score = 0;

  for (let character of characters) {
      score += scores[character];
    }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
  }

  static highestScoreFrom(words) {
    let winningWord = { word: words[0], score: this.scoreWord(words[0])}
    let winningScore = this.scoreWord(words[0])

    for (let word of words) {
      if (this.scoreWord(word) > winningScore) {
        winningScore = this.scoreWord(word)
        winningWord = { word: word, score: this.scoreWord(word)}
      }
      else if (this.scoreWord(word) === winningScore) {
        if (winningWord['word'].length === 10) {
          winningWord = winningWord
        }
        else if (word.length === 10) {
          winningWord = {word: word, score: this.scoreWord(word)}
        }
        else if (word.length < winningWord['word'].length) {
          winningWord = { word: word, score: this.scoreWord(word)}
        }  
      }
    }
    return winningWord
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
