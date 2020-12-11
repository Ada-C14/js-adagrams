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

    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    const hashMap = {}

    for (let i = 0; i < lettersInHand.length; i++) {
      hashMap[lettersInHand[i]] = 0;
    }

    for (let letter of lettersInHand) {
      hashMap[letter] += 1
    }
    console.log(hashMap)
    console.log(input)
  }




};

// Do not remove this line or your tests will break!
export default Adagrams;
