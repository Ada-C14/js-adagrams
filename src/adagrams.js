const Adagrams = {
  drawLetters() {
    this.letterPool = [];
    this.genLetterPool();
    const hand = []
    for(let i=0; i < 10; i++) {
      const num = this.getRandomInt(0, this.letterPool.length)
      hand.push(this.letterPool[num])
      this.letterPool.splice(num, 1)
    }
    return hand
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
    for(const key in this.letterDistribution) {
      const letters = Array(this.letterDistribution[key]).fill(key);
      this.letterPool.push(...letters);
    }
  },
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
