const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterQuan = {
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
    };
    // create a pool of letters to draw from
    const letterPool = []
    for (let letter in letterQuan) {
      for (let i = 0; i < letterQuan[letter]; i++)
        letterPool.push(letter) 
    }

    // shuffle letter pool, source: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for(let i = letterPool.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = letterPool[i]
      letterPool[i] = letterPool[j]
      letterPool[j] = temp
    }

    // draw 10 letters
    const lettersInHand = letterPool.slice(0, 10);

    return lettersInHand
  },

  usesAvailableLetters(input, lettersInHand) {
    const handHashMap = {}

    for (let i = 0; i < lettersInHand.length; i++) {
      handHashMap[lettersInHand[i]] = 0 };

    for (let i = 0; i < lettersInHand.length; i++) {
      handHashMap[lettersInHand[i]] += 1 };

    for (const letter of input) {
      if (handHashMap[letter]) {
        handHashMap[letter] -= 1
        // use debugger to learn why it never hits line 66
        if (handHashMap[letter] < 0) { 
          console.log(`Not enough of letter ${letter} in hand!`)
          return false } }
      else {
        console.log(`${letter} was never in hand!`)
        return false }
      };
    return true;
  },

  // scoreWord

  scoreWord(word) {
    const letterScore = {
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

    const add8 = [7, 8, 9, 10]
    let score = 0

    if (add8.includes(word.length)) {
      score += 8 }

    for (let letter of word) {
      score += letterScore[letter.toUpperCase()]}

    return score
  }

  


}

// console.log(Adagrams.drawLetters())


// Do not remove this line or your tests will break!
export default Adagrams;
