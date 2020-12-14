const Adagrams = {
  poolCount: {
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
    Z: 1,
  },

  buildPool() {
    let pool = [];
    for (const letter in this.poolCount) {
        let count = this.poolCount[letter];
        while (count > 0) {
            pool.push(letter);
            count--;
        }
    }
    return pool;
  },

  drawLetters() {
    const pool = this.buildPool();
    const __ = require('underscore');
    return __.sample(pool, 10);
  },

  countLetters(array) {
    const __ = require('underscore');
    for (const letter in array) {
      return __.countBy(array, letter);
    }
  },

  usesAvailableLetters(input, lettersInHand) {
    const __ = require('underscore');
    const word = input.split('');
    
    const handCount = this.countLetters(lettersInHand);
    const wordCount = this.countLetters(word);

    for (const letter in wordCount) {
      if (handCount[letter] === undefined) {
          return false;
      } else if (handCount[letter] < wordCount[letter]) {
          return false;
      }
    }
    return true;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
