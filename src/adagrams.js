import _ from 'lodash';

const letterDistrib = {
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
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const Adagrams = {
  drawLetters() {
    let letterPool = [];

    for (const letter in letterDistrib) {
      for (let i = 0; i < letterDistrib[letter]; i++) {
        letterPool.push(letter);
      }
    }
    
    return _.sampleSize(letterPool, 10);
  },
  usesAvailableLetters(input, lettersInHand) {
    let clonedHand = _.clone(lettersInHand);
    
    for (const letter of input) {
      if (!clonedHand.includes(letter)) {
        return false;
      }

      _.pull(clonedHand, letter);
    }

    return true;
  },
  scoreWord(word) {
    let score = 0;

    for(const letter of word.toUpperCase()) {
      for(const [key, value] of Object.entries(scoreChart)) {
        if (value.includes(letter)) {
          score += Number(key);
        }
      }
    }

    if (word.length > 6 && word.length <= 10) {
      score += 8;
    }

    return score;
  },
  highestScoreFrom(words) {
    const scores = words.map(word => this.scoreWord(word));
    const max_score = Math.max(...scores);
    const highestScoringWords = words.filter(word => this.scoreWord(word) === max_score);

    if (highestScoringWords.length === 1) {
      return {
        word: highestScoringWords[0],
        score: max_score
      };
    } else {
      const tiedWordsLength = highestScoringWords.map(word => word.length);

      if (tiedWordsLength.includes(10)) {
        return {
          // .find returns the first instance
          word: highestScoringWords.find(word => word.length === 10),
          score: max_score
        };
      } else {
        return {
          word: highestScoringWords.find(word => word.length === Math.min(...tiedWordsLength)),
          score: max_score
        };
      }
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
