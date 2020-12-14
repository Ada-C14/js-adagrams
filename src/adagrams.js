const Adagrams = {
  __: require('underscore'),
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
    return this.__.sample(pool, 10);
  },

  countLetters(array) {
    for (const letter in array) {
      return this.__.countBy(array, letter);
    }
  },

  usesAvailableLetters(input, lettersInHand) {
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

  scoreChart: {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  },

  scoreWord(word) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += this.scoreChart[word[i].toUpperCase()];
    }
    if (word.length > 6) {
      score += 8;
    }

    return score
  },

  highestScoreFrom(words) {
    let topScore = 0;
    let shortestWord = 10;

    const scoredWords = this.__.map(words, (word) => {
      const score = this.scoreWord(word);
      if (score > topScore) {
        topScore = score;
      }
      if (word.length < shortestWord) {
        shortestWord = word.length;
      }

      return { word: word, length: word.length, score: score };
    });

    let topWords = this.__.where(scoredWords, { score: topScore });
    
    let winner = {};
    const tenLetter = this.__.findWhere(topWords, { length: 10 });
    const shortWinner = this.__.findWhere(topWords, { length: shortestWord });

    if (topWords.length === 1) {
      winner.word = topWords[0]['word'];
      winner.score = topWords[0]['score'];
    } else if (tenLetter) {
      winner.word = tenLetter.word;
      winner.score = tenLetter.score;
    } else {
      winner.word = shortWinner.word;
      winner.score = shortWinner.score;
    }

    return winner;
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
