// import { pop } from "core-js/fn/array";
// let newObj = JSON.parse(JSON.stringify(obj));
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

  drawLetters() {
    const letterPool = [];
    for (const letter in Adagrams.letterDistribution) {
      for (let counter = 0; counter < Adagrams.letterDistribution[letter]; counter++) {
        letterPool.push(letter);
      }
    }
    const hand = [];

    for (let counter = 0; counter < 10; counter++) {
      const randomLetters = Math.floor(Math.random() * letterPool.length);
      const drawnLetters = letterPool[randomLetters];
      hand.push(drawnLetters);
      letterPool.splice(randomLetters, 1)
    }

    return hand;

    //draw 10 random letters from letterPool
    //let drawnLetters = ['A', 'T', 'V', 'W', 'E', 'F', 'E', 'D','I', 'N']
    //how do I randomly draw letters and make sure those get removed from letterPool?
    // const drawn = [];
    // const letterPoolCopy = Object.assign({}, Adagrams.letterPool);
    // let counter = 0;

    // while (counter < 10) {
    //   for (const letter of letterPoolCopy) {
    //     if (letterPoolCopy[letter] > 0) {
    //       drawn.push(`${letter}`);
    //       letterPoolCopy[letter] -= 1;          
    //     }
    //     counter += 1;
    //   }
    // }
    // return drawn;
  },
};
// console.log(Adagrams.letterPool);

// Do not remove this line or your tests will break!
export default Adagrams;
