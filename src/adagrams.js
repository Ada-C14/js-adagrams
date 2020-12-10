// import { map } from "core-js/fn/array";

const Adagrams = {
  letterDistribution: {
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
    Z: 1,
  },
  drawLetters() {
    let letterPool = [];
    for(const [letter, count] of Object.entries(this.letterDistribution)) {
      letterPool = letterPool.concat(Array.from(letter.repeat(count)));
    }

    const hand = [];    
    for(let i = 0; i < 10; i += 1 ) {
      const rand_index = Math.floor(Math.random() * letterPool.length);
      hand.push(letterPool[rand_index]);
    }
    return hand;
  },
  usesAvailableLetters(input, lettersInHand) {
    lettersToUse = {};
    for(const letter of lettersInHand) {
      if (lettersToUse[letter]) {
        lettersToUse[letter] += 1;
      } else {
        lettersToUse[letter] = 1;
      }
    }

    for(const letter of input) {
      if (lettersToUse[letter]) {
        lettersToUse[letter] -= 1;
      } else {
        return false;
      }
    }

    return true;
  },
  scoreDistribution: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  },
  scoreWord(word) {
    const letterPointValues = {};

    for(const [value, letters] of Object.entries(this.scoreDistribution)) {
      const letterValuePairs = letters.map( letter => [letter, Number(value)]);
      Object.assign(letterPointValues, Object.fromEntries(letterValuePairs));
    }

    let score = 0
    for(const letter of word.toUpperCase()){
      score += letterPointValues[letter]
    }

    return score
  }
};

// Do not remove this line or your tests will break!
// export default Adagrams;

// const lettersInHand = Adagrams.drawLetters();
// console.log(lettersInHand)
// console.log(Adagrams.usesAvailableLetters("A", 'abcd'))
console.log(Adagrams.scoreWord('sad'))

