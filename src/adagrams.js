const letterPool = {A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1};
const letterValue = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10};

const helperMethods = {
  letterArray(object) {
    // Turn letterPool into Arry
    let array = [];
    for (const [key, value] of Object.entries(object)) {
      array = array.concat(key.repeat(value).split(''))
    }
    return array
  },
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
  },
}

const Adagrams = {
  drawLetters() {
    const ltrArray = helperMethods.letterArray(letterPool)
    const tenLetters = helperMethods.shuffle(ltrArray).slice(0, 10)
    return tenLetters
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
