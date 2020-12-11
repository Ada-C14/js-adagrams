const Adagrams = {
  // wave 1
  letters: {
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
},

allLetters: [],

drawLetters: function() {
  // update allLetters with correct frequencies(repetition) of each letter
  for(let [letter,frequency] of Object.entries(this.letters)){
    for(let i = 0; i < frequency; i++){
      this.allLetters.push(letter);
    } 
  }
  // shuffle all letters
  const randomLetter = this.allLetters.sort(() => Math.random() - 0.5)

  // return first 10 letterrs
  return randomLetter.slice(0,10)
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
