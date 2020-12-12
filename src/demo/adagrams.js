import Real from 'adagrams';

const real = new Real()

const Stub = {
  drawLetters() {
    const defaultLetters = ['H', 'E', 'L', 'L', 'O', 'W', 'O', 'R', 'L', 'D'];

    if(typeof real.drawLetters === 'function') {
      return real.drawLetters() || defaultLetters;
    }

    return defaultLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    if(typeof real.usesAvailableLetters === 'function') {
      return real.usesAvailableLetters(input, lettersInHand);
    }

    return true;
  },

  scoreWord(word) {
    if(typeof real.scoreWord === 'function') {
      return real.scoreWord(word);
    }

    return -1;
  },

  highestScoreFrom(words) {
    if(typeof real.highestScoreFrom === 'function') {
      return real.highestScoreFrom(words);
    }

    if(words.length < 1) return null;

    return {
      word: words[0],
      score: Stub.scoreWord(words[0]),
    };
  },
};

export default Stub;
