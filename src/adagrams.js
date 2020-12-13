const Adagrams = {
  createLetterPool() {
    let letterPool = [];
    letterPool.push("J", "K", "Q", "X", "Z")
    for (let i = 0; i < 2; i++) {
      letterPool.push('B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y');
    };
    for (let i = 0; i < 3; i++) {
      letterPool.push('G');
    };
    for (let i = 0; i < 4; i++) {
      letterPool.push('D', 'L', 'S', 'U');
    };
    for (let i = 0; i < 6; i++) {
      letterPool.push('N', 'R', 'T');
    };
    for (let i = 0; i < 8; i++) {
      letterPool.push('O');
    };
    for (let i = 0; i < 9; i++) {
      letterPool.push('A', 'I');
    };
    for (let i = 0; i < 12; i++) {
      letterPool.push('E');
    };
    return letterPool
  },


  drawLetters() {
    // Implement this method for wave 1
    let letterPool  = this.createLetterPool();
    let indexs = new Set();
    while (indexs.size < 10) {
      indexs.add(Math.floor(Math.random() * letterPool.length));
    };
    indexs = Array.from(indexs);
    let letters = [];
    indexs.forEach (i => {letters.push(letterPool[i])});
    return letters;
  },

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > 10) {return false};
    let letters = {}
    for (let letter of lettersInHand) {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      };
    };

    input = input.toUpperCase();
    for (let char of input) {
      if (letters[char]) {
        letters[char] -= 1;
        if (letters[char] < 0) {return false};
      } else {
        return false;
      };
    }
    return true;
  },

  scoreWord(word) {
    const scoreChart = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1,
                      O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10};
    let score = 0;
    word = word.toUpperCase;
    for (const char of word) {
      score += scoreChart[char];
    };
    if (word.length > 6) { score += 8};
    return score;
  },

  highestScoreFrom(words) {
    let wordWithScore = {};
    for (const word of words) {
      wordWithScore[word] = this.scoreWord(word);
    };
    let max = 0;
    let maxWord;
    for (const word in wordWithScore) {
      if (wordWithScore[word] > max) {
        max = wordWithScore[word];
        maxWord = word;
      } else if (wordWithScore[word] === max) {
        if (maxWord.length < 10 && word.length === 10) {
          maxWord = word;
        };
        if (word.length < maxWord.length && maxWord.length < 10) {
          maxWord = word
        };
      };
    };
    const winner = {
      score: max,
      word: maxWord
    }
    return winner;
  },
};


// Do not remove this line or your tests will break!
export default Adagrams;
