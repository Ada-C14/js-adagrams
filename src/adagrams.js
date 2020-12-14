import _ from 'lodash';

const Adagrams = {
  drawLetters() {
    const LETTER_DISTRIB = {
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

    let letterPool = [];

    for (const letter in LETTER_DISTRIB) {
      for (let i = 0; i < LETTER_DISTRIB[letter]; i++) {
        letterPool.push(letter);
      }
    }
    
    return _.sampleSize(letterPool, 10);
  },
  usesAvailableLetters(input, lettersInHand) {
    let hand = {};

    for (const letter of lettersInHand) {
      hand[letter.toUpperCase()] ? hand[letter.toUpperCase()]++ : hand[letter.toUpperCase()] = 1
    }
    
    for (const letter of input.toUpperCase()) {
      if (hand[letter] === 0 || hand[letter] === undefined) {
        return false;
      }
      hand[letter]--;
    }

    return true;
  },
  scoreWord(word) {
    const SCORE_CHART = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    };

    let score = 0;

    for(const letter of word.toUpperCase()) {
      for(const [key, value] of Object.entries(SCORE_CHART)) {
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
    const maxScore = Math.max(...scores);
    const highestScoringWords = words.filter(word => this.scoreWord(word) === maxScore);

    if (highestScoringWords.length === 1) {
      return {
        word: highestScoringWords[0],
        score: maxScore
      };
    } else {
      const tiedWordsLength = highestScoringWords.map(word => word.length);

      if (tiedWordsLength.includes(10)) {
        return {
          // .find returns the first instance
          word: highestScoringWords.find(word => word.length === 10),
          score: maxScore
        };
      } else {
        return {
          word: highestScoringWords.find(word => word.length === Math.min(...tiedWordsLength)),
          score: maxScore
        };
      }
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
