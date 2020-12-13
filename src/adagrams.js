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
    let score = 0;
    const letters = word.toUpperCase().split('');
  

    if (word.length >= 7) {
      score += 8;
    } 
    else {
      score = 0;
    }

    for (const scoreLetter in this.scoreChart) {
      for (const letter in letters) {
        if (letters[letter] === scoreLetter) {
          score += this.scoreChart[scoreLetter];
        }
      }
    }
    return score;
  },

  highestScoreFrom(words) {
    const bestWordObj = {};
    let bestScore = 0;
    let bestWord = '';

    //bestWord = {word: 'PINEAPPLE', score: this.scoreWord('PINEAPPLE'))},

    //SCORING:
    //prefer word with fewest letters, unless it has 10 letters
    //ties: word with longest letters win
    //first word if multiple words have same length/score

    for (const playedWord in words) {
      const score = this.scoreWord(words[playedWord]);

      // console.log(words[playedWord]) //prints out each word in the array

      if (score > bestScore) {
        bestWord = words[playedWord];
        bestScore = score;

      }
      else if (words[playedWord].length === 10 && score === bestScore && bestWord.length < 10 ) {
        bestWord = words[playedWord];
        bestScore = score;
      }
      else if (score === bestScore && bestWord.length > words[playedWord].length && bestWord.length !== 10) {
        bestWord = words[playedWord];
        bestScore = score;
      }
      console.log(score)

    }
    bestWordObj['word'] = bestWord;
    bestWordObj['score'] = bestScore;

    // console.log(bestWord);
    console.log(bestWordObj);

    return bestWordObj;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.highestScoreFrom(['HELLO', 'APPLE', 'CANDY']))

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