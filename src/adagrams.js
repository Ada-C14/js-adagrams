const LETTERS = {
  A: {count:9, score:1},
  B: {count:2, score:3},
  C: {count:2, score:3},
  D: {count:4, score:2},
  E: {count:12, score:1},
  F: {count:2, score:4},
  G: {count:3, score:2},
  H: {count:2, score:4},
  I: {count:9, score:1},
  J: {count:1, score:8},
  K: {count:1, score:5},
  L: {count:4, score:1},
  M: {count:2, score:3},
  N: {count:6, score:1},
  O: {count:8, score:1},
  P: {count:2, score:3},
  Q: {count:1, score:10},
  R: {count:6, score:1},
  S: {count:4, score:1},
  T: {count:6, score:1},
  U: {count:4, score:1},
  V: {count:2, score:4},
  W: {count:2, score:4},
  X: {count:1, score:8},
  Y: {count:2, score:4},
  Z: {count:1, score:10},
};

const Adagrams = {
  drawLetters() {
    const drawnLetters = [];

    //create letter pool
    const allLetters = [];
    for(const letter in LETTERS) {
      const count = LETTERS[letter]['count'];
      for(let i = 0; i < count; i++) {
        allLetters.push(letter);
      }
    }

    //draw ten letters
    for(let i = 0; i < 10; i++) {
      //Math.floor(Math.random() * (max - min)) where max = array.length - 1 and min = 0
      const index = Math.floor(Math.random() * (allLetters.length - 1));
      drawnLetters.push(allLetters.splice(index, 1));
    }

    return drawnLetters.flat();
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.split('');
    for(const letter of input) {
      const index = lettersInHand.indexOf(letter)
      if (index == -1) {
        return false;
      } else {
        lettersInHand.splice(index, 1);
      }
    }
    return true;
  },

  scoreWord(word) {
    word = word.toUpperCase().split('');
    let score = 0;
    if (word.length >= 7) {
      score += 8;
    }
    word.forEach((letter) => {
      score += LETTERS[letter]['score'];
    });
    return score;
  },

  highestScoreFrom(words) {
    let highScore = {word: "", score: 0};
    words.forEach((word) => {
      const score = this.scoreWord(word);
      if (score > highScore['score']) {
        highScore.score = score;
        highScore.word = word;
      } else if (score == highScore['score']) {
        highScore = this.tieBreak(highScore, {word, score}); // trying out the shorthand of {word: word, score: score} == {word, score}
      }
    });
    return highScore;
  },

  tieBreak(encumbentHighScoreHash, newScoreHash) {
    if (encumbentHighScoreHash['word'].length < 10) {
      if (newScoreHash['word'].length == 10) {
        return newScoreHash;
      } else {
        if (newScoreHash['word'].length < encumbentHighScoreHash['word'].length) {
          return newScoreHash;
        }
      } 
    } 
    return encumbentHighScoreHash;
  }

};



// Do not remove this line or your tests will break!
export default Adagrams;
