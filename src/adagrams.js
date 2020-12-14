const letterPool = {
  A: [9, 1],	
  B: [2, 3],
  C: [2, 3],	
  D: [4, 2],	
  E: [12, 1],	
  F: [2, 4],
  G: [3, 2],
  H: [2, 4],	
  I: [9, 1],
  J: [1, 8],	
  K: [1, 5],	
  L: [4, 1],	
  M: [2, 3],	
  N: [6, 1],
  O: [8, 1],
  P: [2, 3],
  Q: [1, 10],
  R: [6, 1],
  S: [4, 1],
  T: [6, 1],
  U: [4, 1],
  V: [2, 4],
  W: [2, 4],
  X: [1, 8],
  Y: [2, 4],
  Z: [1, 10]
}

const Adagrams = {
  drawLetters() {
    const letters = [];
    for (const letter in letterPool) {
      let i = 0
      do {
        letters.push(letter);
        i += 1
      } while (i < letterPool[letter][0]);
    }

    letters.sort(() => Math.random() - 0.5);

    let hand = letters.slice(0,10);
    return hand;
  },

  usesAvailableLetters(word, hand = drawLetters()) {
    // if letter is found in hand, the search continues at an incremented index. this way a letter in hand cant be counted twice
    return word.toUpperCase().split('').every(( index => letter => index = hand.indexOf(letter, index) + 1)(0));
  },
  
  scoreWord(word) {
    if (word.length < 1) {
      return 0
    }

    let score = 0
    word.toUpperCase().split('').forEach(letter => score += letterPool[letter][1]);

    if (word.length > 6) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {
    let scores = [];
    for (const word of words) {
      scores.push(Adagrams.scoreWord(word));
    }

    const bestScore = Math.max(...scores);
    const indices = scores.flatMap((score, index) => score === bestScore ? index : []);

    let highestScore;
    let winningIndex;
    let tiedWords = [];
    if (indices.length === 1) {
      winningIndex = indices[0];
      highestScore = {score: scores[winningIndex], word: words[winningIndex]};
      return highestScore;
    } else {
      for (const index of indices) {
        tiedWords.push(words[index]);
      }
      let shortest = tiedWords[0];
      let shortestIndex = 0;
      for (const word of tiedWords) {
        if (word.length === 10) {
          winningIndex = tiedWords.indexOf(word);
          highestScore = {score: scores[indices[winningIndex]], word: tiedWords[winningIndex]};
          return highestScore;
        } else {
          if (word.length < shortest.length) {
            shortest = word;
            shortestIndex = tiedWords.indexOf(shortest);
          }
        }
      }
      highestScore = {score: scores[indices[shortestIndex]], word: tiedWords[shortestIndex]};
      return highestScore;
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
