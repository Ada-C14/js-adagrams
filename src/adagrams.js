class Adagrams {
  static drawLetters() {
    const letterPool = buildPool();
    const shuffled = letterPool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }

  static usesAvailableLetters(input, lettersInHand) {
    const counter = counterBuilder(lettersInHand);
    for (let char of input){
      if (!counter[char] === true ) {
        return false;
      } else {
        counter[char] -= 1;
      }
    };
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
  };
  word = word.toUpperCase();
  let score = 0;
  for (const char of word) {
    score += scores[char];
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
  }

  static highestScoreFrom(words) {
    const winning_word = {
      word: '',
      score: 0
    };
    let hightestScore = 0;

    for (const word of words) {
      let score = this.scoreWord(word)
      if (score > hightestScore) {
        hightestScore = score;
        winning_word['word'] = word;
        winning_word['score'] = score;
    } else if (score === hightestScore && winning_word.word.length !== 10) {
      if (word.length === 10 || word.length < winning_word.word.length) {
        winning_word['word'] = word;
        winning_word['score'] = score;
      }}};
    return winning_word;
  }};

const buildPool = function () {
  const letterPool = [];
  const pool = {A:9,
          B:2,
          C:2,
          D:4,
          E:12,
          F:2,
          G:3,
          H:2,
          I:9,
          J:1,
          K:1,
          L:4,
          M:2,
          N:6,
          O:8,
          P:2,
          Q:1,
          R:6,
          S:4,
          T:6,
          U:4,
          V:2,
          W:2,
          X:1,
          Y:2,
          Z:1};

  Object.keys(pool).forEach(function (letter) { 
    const number = pool[letter]
    for (let i = 0; i < number; i ++){
      letterPool.push(letter)
    }});
    return letterPool; 
};


const counterBuilder = function(str) {
  const counter = {};
  for (let char of str){
    if (counter[char]) {
    counter[char] += 1
  } else {
    counter[char] = 1
  }};
  return counter;
};

// Do not remove this line or your tests will break!
export default Adagrams;
