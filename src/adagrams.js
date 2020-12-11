const Adagrams = {

  lettersDist: {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
    I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1,
    R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
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
    while(hand.length < 10){
      const index = Math.floor(Math.random() * letterPool.length);
      hand.push(letterPool[index]);
      letterPool.splice(index, 1);
    }
    return hand;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
