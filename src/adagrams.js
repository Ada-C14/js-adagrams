const letterPool = {
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
}

// concat letter to a string and multiply by value. push letter value number of times
const Adagrams = {
  drawLetters() {
    const letters = [];
    for (const letter in letterPool) {
      for(let i = 0; i < letterPool[letter]; i++) {
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
    const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    const threePoints = ['B', 'C', 'M', 'P'];
    const fourPoints = ['F', 'H', 'V', 'W', 'Y'];

    word = word.toUpperCase().split('');
    let score = 0;
    for (const letter of word) {
      if (onePoint.includes(letter)) {
        score += 1;
      } else if (letter === 'D' || letter == 'G') {
        score += 2;
      } else if (threePoints.includes(letter)) {
        score += 3;
      } else if (fourPoints.includes(letter)) {
        score += 4;
      } else if (letter === 'K') {
        score += 5;
      } else if (letter === 'J' || letter === 'X') {
        score += 8;
      } else if (letter === 'Q' || letter === 'Z') {
        score += 10;
      }
    }

    if (word.length > 6) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {
    let scores = []
    for (const word of words) {
      scores.push(Adagrams.scoreWord(word))
    }

    const bestScore = Math.max(...scores);

    const indices = scores.flatMap((score, index) => score === bestScore ? index : []);
    let highestScore;
    let winningIndex;
    let tiedWords = []
    if (indices.length === 1) {
      winningIndex = indices[0]
      highestScore = {score: scores[winningIndex], word: words[winningIndex]}
      return highestScore
    } else {
      for (const index of indices) {
        tiedWords.push(words[index])
      }
      let shortest = tiedWords[0];
      let shortestIndex = 0;
      for (const word of tiedWords) {
        if (word.length === 10) {
          winningIndex = tiedWords.indexOf(word)
          highestScore = {score: scores[indices[winningIndex]], word: tiedWords[winningIndex]}
          return highestScore
        } else {
          if (word.length < shortest.length) {
            shortest = word
            shortestIndex = tiedWords.indexOf(shortest)
          }
        }
      }
      winningIndex = shortestIndex
    
      highestScore = {score: scores[indices[winningIndex]], word: tiedWords[winningIndex]}
      return highestScore
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
