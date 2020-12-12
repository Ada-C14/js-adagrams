class Adagrams {
  constructor() {
    this.letterPool = {A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1};
    this.letterValue = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10};
  }

  drawLetters() {
    const ltrArray = this.letterArray(this.letterPool)
    const tenLetters = this.shuffle(ltrArray).slice(0, 10)
    return tenLetters
  }

  usesAvailableLetters(input, lettersInHand) {
    const ltrInHand = this.letterObject(lettersInHand)
    for (const char of input) {
      if (!ltrInHand[char]) {
        return false
      }
      else if (ltrInHand[char] === 0) {
        return false
      }
      else {
        ltrInHand[char] -= 1
      }
    }
    return true
  }

  scoreWord(word) {
    let points = 0
    for (const char of word.toUpperCase()) {
      (this.letterValue[char]) ? points += this.letterValue[char] : points
    }
    (word.length >= 7) ? points += 8 : points
    return points
  }

  highestScoreFrom(words) {
    const maxScore = words.map(w => this.scoreWord(w))
                    .sort((a, b) => b-a)
    const highestList = words.filter(w => this.scoreWord(w) === maxScore[0])

    let winner = {word: highestList[0], score: maxScore[0]}
    for (const w of highestList) {
      if (w.length === 10 && winner.word.length < 10) {
        winner.word = w
      }
      else if (w.length < winner.word.length && winner.word.length != 10) {
        winner.word = w
      }
    }
    return winner
  }
 
  // helperMethods
  letterArray(object) {
    // Turn letterPool into Array
    let array = [];
    for (const [key, value] of Object.entries(object)) {
      array = array.concat(key.repeat(value).split(''))
    }
    return array
  }
  
  shuffle(array) {
    // Fisher–Yates Shuffle
    let randomIndex = 0;
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      let tempValue = array[randomIndex]
      array[randomIndex] = array[currentIndex]
      array[currentIndex] = tempValue
    }
    return array
  }

  letterObject(array) {
    // Turn array into Object
    let obj = {};
    for (const ltr of array) {
      (obj[ltr]) ? obj[ltr] += 1 : obj[ltr] = 1
    }
    return obj
  } 
};

// Do not remove this line or your tests will break!
export default Adagrams;
