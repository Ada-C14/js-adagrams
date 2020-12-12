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
      if (hand[letter]) {
        hand[letter] += 1;
      } else {
        hand[letter] = 1;
      }
    }

    for (const letter of input) {
      if (!hand[letter] || hand[letter] === 0) {
        return false;
      } else if (hand[letter] > 0) {
        hand[letter] -= 1;
      }
    }

    return true;
  },
};

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
