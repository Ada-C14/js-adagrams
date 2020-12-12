const Adagrams = {

  lettersDist: {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
    I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1,
    R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
  },

  scoreChart: {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2,
    H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1,
    O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1,
    V: 4, W: 4, X: 8, Y: 4, Z: 10
  },

  drawLetters() {

    const hand = [];
    const letterPool = [];

    for (const letter in this.lettersDist) {
      const countLetter = this.lettersDist[letter];
      for (let i = 0; i < countLetter; i++) {
        letterPool.push(letter);
      }
    }
    while (hand.length < 10) {
      const index = Math.floor(Math.random() * letterPool.length);
      hand.push(letterPool[index]);
      letterPool.splice(index, 1);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {

    const handCopy = [...lettersInHand];
    for (const letter of input) {
      if (handCopy.includes(letter)) {
        handCopy.splice(handCopy.indexOf(letter), 1)

      } else {
        console.log(letter)
        return false;

      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;
    for (const letter of word.toUpperCase()) {
      score += this.scoreChart[letter];
    }
    if (word.length >= 7) {
      score += 8;
    }
    return score
  },

  highestScoreFrom(words) {
    let maxScore = 0;
    let highestWord = "";


    for (const word of words) {
      if (this.scoreWord(word) > maxScore) {
        maxScore = this.scoreWord(word)
        highestWord = word
      } else if (this.scoreWord(word) === maxScore && word.length == highestWord.length) {
        continue
      } else if (this.scoreWord(word) === maxScore && word.length === 10) {
        maxScore = this.scoreWord(word)
        highestWord = word
      } else if (this.scoreWord(word) === maxScore && word.length < highestWord.length && highestWord.length != 10) {
        maxScore = this.scoreWord(word)
        highestWord = word
      }
    }
      return {word: highestWord, score: maxScore}
  }
}


// Do not remove this line or your tests will break!
export default Adagrams;
