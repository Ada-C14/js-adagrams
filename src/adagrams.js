const Adagrams = {
  letterDist: {
    A: 9, B: 2, C: 2,
    D: 4, E: 12, F: 2,
    G: 3, H: 2, I: 9,
    J: 1, K: 1, L: 4,
    M: 2, N: 6, O: 8,
    P: 2, Q: 1, R: 6,
    S: 4, T: 6, U: 4,
    V: 2, W: 2, X: 1,
    Y: 2, Z: 1
  },
  
  drawLetters() {
    const letterPool = [];
    for (const letter in this.letterDist) {
      let i = 0;
      while (i < this.letterDist[letter]) {
        letterPool.push(letter);
        i++;
      }
    }
    
    const hand = [];
    let i = 0;
    while (i < 10) {
      hand.push(letterPool[Math.floor(Math.random() * letterPool.length - 1)]);
      i++;
    }

    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const hand = {};
    for (const letter of lettersInHand) {
      if (hand[letter.toUpperCase()]) {
        hand[letter.toUpperCase()] += 1;
      } else {
        hand[letter.toUpperCase()] = 1;
      }
    }

    for (const letter of input.toUpperCase()) {
      if (!hand[letter] || hand[letter] === 0) {
        return false;
      } else if (hand[letter] > 0) {
        hand[letter] -= 1;
      }
    }

    return true;
  },

  letterScores: {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z:10
  },

  scoreWord(word) {
    let score = 0;
    
    for (const letter of word.toUpperCase()) {
      score += this.letterScores[letter];
    }

    if (word.length > 6 && word.length < 11) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {
    const scores = {};
    let maxScore = 0;
    let shortestWord;

    for (const word of words) {
      scores[word] = this.scoreWord(word);
      if (scores[word] > maxScore) {
        maxScore = scores[word];
      }
    }

    for (const word in scores) {
      if (scores[word] === maxScore) {
        if (word.length === 10) {
          return { word: word, score: scores[word] };
        } else if (!shortestWord) {
          shortestWord = word;
        } else if (shortestWord.length > word.length) {
          shortestWord = word;
        }
      }
    }

    return { word: shortestWord, score: maxScore };
  }
};

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
