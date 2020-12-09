const LETTERDISTRIBUTION = {
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
};
const LETTERSCORES = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
};

class Adagrams {
  
  static genLetterPool() {
    const letterPool = [];
    for (const key in LETTERDISTRIBUTION) {
      const letters = Array(LETTERDISTRIBUTION[key]).fill(key);
      letterPool.push(...letters);
    }
    return letterPool;
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static drawLetters() {
    let pool = Adagrams.genLetterPool();
    const hand = []
    for(let i=0; i < 10; i++) {
      const num = Adagrams.getRandomInt(0, pool.length);
      hand.push(pool[num]);
      pool.splice(num, 1);
    }
    return hand;
  }
  static usesAvailableLetters(input, lettersInHand) {
    const frequencies = {};
    for(let i of lettersInHand) {
    (frequencies[i]) ? frequencies[i] ++ : frequencies[i] = 1;
    }
    for(let i = 0; i < input.length; i++) {
      if(frequencies[input[i]]) {
        frequencies[input[i]] --;
      } else {
        return false;
      }
    }
    return true;
  }
  static scoreWord(word) {
    let score = 0;
    for(let i = 0; i < word.length; i++) {
      score += LETTERSCORES[word[i].toUpperCase()];
    }
    if(word.length > 6) {
      return score + 8;
    } else {
      return score;
    }
  }
  static highestScoreFrom(words) {
    const score = {word: "", score: 0};
    for(let word of words) {
      const wordScore = this.scoreWord(word);
      if((score.score < wordScore) || ((score.score === wordScore) && ((word.length < score.word.length && score.word.length != 10) || (word.length === 10  && score.word.length < 10)))) {
        score.word = word;
        score.score = wordScore;
      }
    }
    return score;
  }
}
// Do not remove this line or your tests will break!
export default Adagrams;
