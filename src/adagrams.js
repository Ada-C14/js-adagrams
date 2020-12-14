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
    const lettersCopy = [...lettersInHand];
    for (const letter of input.toUpperCase()) {
      if(!lettersCopy.includes(letter)) {
        return false;
      } else {
        lettersCopy.splice(lettersCopy.indexOf(letter), 1);
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;
    if (word.length > 6) {
      score += 8;
    }
    for (const letter of word.toUpperCase()) {
      switch (letter) {
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
          score += 1;
          break;
        case 'D':
        case 'G':
          score += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          score += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          score += 4;
          break;
        case 'K':
          score += 5;
          break;
        case 'J':
        case 'X':
          score += 8;
          break;
        case 'Q':
        case 'Z':
          score += 10;
          break;
      }
    }
    return score;
  },

  highestScoreFrom(words) {
    let winner = {
      word: '',
      score: 0,
    };
    let bestWords = [];
    let highScore = 0;
    for (const word of words) {
      if (this.scoreWord(word) > highScore) {
        bestWords = [];
        bestWords.push(word);
        highScore = this.scoreWord(word);
      } else if (this.scoreWord(word) === highScore) {
        bestWords.push(word);
      }
    }
    if (bestWords.length > 1) {
      winner['word'] = this.breakTie(bestWords);
    } else {
      winner['word'] = bestWords[0];
    }

    winner['score'] = highScore;
    return winner;
  },

  breakTie(words) {
    let winners = [];
    let wordLength = 10;
    for (const word of words) {
      if (word.length === 10) {
        winners = [];
        winners.push(word);
        break;
      } else if (word.length < wordLength) {
          winners = [];
          winners.push(word);
          wordLength = word.length;
      }
    }
    return winners[0];
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
