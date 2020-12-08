const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
  },
  letterDistribution: {
    A : 9,	N : 6,
    B : 2,	O : 8,
    C : 2,	P : 2,
    D : 4,	Q : 1,
    E : 12,	R : 6,
    F : 2,	S : 4,
    G : 3,	T : 6,
    H : 2,	U : 4,
    I : 9,	V : 2,
    J : 1,	W : 2,
    K : 1,	X : 1,
    L : 4,	Y : 2,
    M : 2,	Z : 1,
  },
  letterPool: [],
  genLetterPool() {
    console.log('starting loop')
    for(const key in this.letterDistribution) {
      for(let i = 0; i < this.letterDistribution[key]; i++) {
        this.letterPool.push(key)
      }
    }
  },
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
