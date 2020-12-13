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

const points = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: 'K',
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

// concat letter to a string and multiply by value. push letter value number of times
const Adagrams = {
  drawLetters() {
    const letters = [];
    for (const letter in letterPool) {
      for(let i = 0; i < letterPool[letter][0]; i++) {
        letters.push(letter);
    }
    }
    letters.sort(() => Math.random() - 0.5);

    let hand = letters.slice(0,10);
    return hand;
  },

  usesAvailableLetters(word, hand = drawLetters()) {
    return word.toUpperCase().split('').every(( index => letter => index = hand.indexOf(letter, index) + 1)(0));
  },
  
  scoreWord(word) {
    // const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    // const threePoints = ['B', 'C', 'M', 'P'];
    // const fourPoints = ['F', 'H', 'V', 'W', 'Y'];

    // word = word.toUpperCase().split('');
    // let score = 0;
    // for (const letter of word) {
    //   if (onePoint.includes(letter)) {
    //     score += 1;
    //   } else if (letter === 'D' || letter == 'G') {
    //     score += 2;
    //   } else if (threePoints.includes(letter)) {
    //     score += 3;
    //   } else if (fourPoints.includes(letter)) {
    //     score += 4;
    //   } else if (letter === 'K') {
    //     score += 5;
    //   } else if (letter === 'J' || letter === 'X') {
    //     score += 8;
    //   } else if (letter === 'Q' || letter === 'Z') {
    //     score += 10;
    //   }
    // }
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
