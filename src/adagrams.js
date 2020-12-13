const POOL = {
  a: 9,
  b: 2,
  c: 2,
  d: 4,
  e: 12,
  f: 2,
  g: 3,
  h: 2,
  i: 9,
  j: 1,
  k: 1,
  l: 4,
  m: 2,
  n: 6,
  o: 8,
  p: 2,
  q: 1,
  r: 6,
  s: 4,
  t: 6,
  u: 4,
  v: 2,
  w: 2,
  x: 1,
  y: 2,
  z: 1,
}

const Adagrams = {
  randInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  },

  drawLetters() {
    // Turn pool object into flat array
    let newPool = [];
    for (var letter in POOL) {
      for (let i = 0; i < POOL[letter]; i++) {
        newPool.push(letter.toUpperCase());
      }
    }

    // Select ten letters from pool
    let hand = [];
    for (let i = 0; i < 10; i++) {
      hand.push(String(newPool.splice(this.randInt(newPool.length), 1)));
    }

    return hand;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
