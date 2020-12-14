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

   usesAvailableLetters(input, lettersInHand) {
     if (input.length > lettersInHand.length) {
       return false;
     }

     // Iterate through characters in input string
     for (let c of input) {
       // Return false if letter is not in hand
       if (!lettersInHand.includes(c)) {
         return false;
       }

       // Remove letter from hand
       let index = lettersInHand.findIndex(letter => letter === c);
       lettersInHand.splice(index, 1);
     }

     return true;
  },

  scoreWord(word) {
    let score = 0;
    // Iterate through characters in word
    for (let c of word) {
      switch (c.toUpperCase()) {
        case 'D':
        case 'G':
          score += 2;
          break;0
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          score += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          score += 4;
          break;
        case 'K':
          score += 5;
          break;
        case 'J':
        case 'X':
          score += 8;
          break;
        case 'Q':
        case 'Z':
          score += 10;
          break;
        default:
          score += 1;
      }
    }

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
