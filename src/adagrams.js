const Adagrams = {
  letterDistribution: {
    A : 9,
    B : 2,	
    C : 2,	
    D : 4,	
    E : 12,	
    F : 2,	
    G : 3,	
    H : 2,	
    I : 9,	
    J : 1,	
    K : 1,	
    L : 4,	
    M : 2,
    N : 6,
    O : 8,
    P : 2,
    Q : 1,
    R : 6,
    S : 4,
    T : 6,
    U : 4,
    V : 2,
    W : 2,
    X : 1,
    Y : 2,
    Z : 1,
  },

  scoreChart: {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z:	10,
  },

  letterPool: [],

  randomize() {
    const letterPool = [];
    for (const letter in this.letterDistribution) {
      for (let counter = 0; counter < this.letterDistribution[letter]; counter++) {
        this.letterPool.push(letter);
      }
    }
    const randomNumber = Math.floor(Math.random() * this.letterPool.length);
    const letter = this.letterPool[randomNumber];

    return letter;
  },

  drawLetters() {
    const hand = [];
    for (let counter = 0; counter < 10; counter++) {
      const drawnLetter = this.randomize();

      hand.push(drawnLetter);
      this.letterPool.splice(drawnLetter, 1)
    }

    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputLetters = input.split('');
    for (const letter in inputLetters) {
      if (!inputLetters.includes(lettersInHand[letter])) {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {


    return score,
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.usesAvailableLetters('GOOD', ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X']))

//Decrementing letters from object--I just curious about how to write another function to solve wave 1
// randomize() {
//   const keys = Object.keys(this.letterPool);
//   const randomNumber = Math.floor(Math.random() * keys.length);
//   const letter = keys[randomNumber];

//   return letter;
// },

// drawLetters() {
//   const hand = [];
//   let counter = 0;

//   while (counter < 10) {
//     const drawnLetter = this.randomize();
//     if (this.letterPool[drawnLetter] > 0) {
//       hand.push(drawnLetter);
//       this.letterPool[drawnLetter] -= 1;
//       counter += 1;
//     }
//   }
//   return hand;
// },