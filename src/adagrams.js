const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterQuantity = {"A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S": 4, "T": 2, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1};

    // build the pool based on above 9 x a, 2 x b etc.
    let letterPool = [];

    const times = x => f => {
      if (x > 0) {
        f();
        times (x - 1) (f);
      }
    }
    
    // use it
    

    for (let letter in letterQuantity) {
      times (letterQuantity[letter]) (() => letterPool.push(letter)) // add letter to the letter pool array
    };

    // draw from the pool (.sample method?) & return the drawn letters


  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
