const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    // return an array of 10 letters 
    const letterPool = {
      "A": 9, 
      "B": 2, 
      "C": 2,
      "D": 4,
      "E": 12,
      "F": 2,
      "G": 3,
      "H": 2,
      "I": 9,
      "J": 1,
      "K": 1,
      "L": 4,
      "M": 2,
      "N": 6,
      "O": 8,
      "P": 2,
      "Q": 1,
      "R": 6,
      "P": 2,
      "Q": 1,
      "R": 6,
      "S": 4,
      "T": 6,
      "U": 4,
      "V": 2,
      "W": 2,
      "X": 1,
      "Y": 2,
      "Z": 1
    };
    // how to push the into an array of letters

    let letterHand = []

    for (const letter in letterPool) {
      for (let i = 0; i < letterPool[letter]; i++) {
        letterHand.push(letter);
      }
    }

    // grab 10 random letters from the letterHand array
    const currentHand = [];

    for (let i = 0; i < 10; i ++) {
      const rand = letterHand[Math.floor(Math.random() * letterHand.length)];
      currentHand.push(rand);
    }

    return currentHand;
  },
  usesAvailableLetters(input, letterInHand) {
    let letterArr = input.toUpperCase().split('');
  
    let handHash = {};
    for (let letter of letterInHand) {
      handHash[letter] ? handHash[letter] += 1 : handHash[letter] = 1;
    }

    for (let letter of letterArr) {
      if (handHash[letter]) {
        handHash[letter] -= 1;
      } else {
        return false
      }
    }

    const hashValues = Object.values(handHash);
    return hashValues.every(value => value >= 0);

  },
  scoreWord(word) {
    const wordValue = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
    };

    let sum = 0;
    let wordArr = word.toUpperCase().split('');

    // 

    for (let letter of wordArr) {
      for (let value in wordValue) {
        if (wordValue[value].includes(letter)) {
          sum += Number(value);
        }
      }
    }

    if (word.length >= 7) {
      sum += 8;
    }
    
    return sum
  },
  highestScoreFrom(words) {
  
    let result = [];
    let maxScore = 0;

    // populate the object with word and the score 
    for (let word of words) {
      if (this.scoreWord(word) > maxScore) {
        maxScore = this.scoreWord(word)
      }
      result.push({'word': word, 'score': this.scoreWord(word)});
    }

    const filterObj = result.filter(obj => obj.score == maxScore);
    const tenLetters = filterObj.find(obj => obj.word.length === 10);

    // if  tenLetters isn't undefined return it, else return the word with less amount of letter 
    // by sorting the filter object by asending order
    if (tenLetters) {
      return tenLetters
    } else {
      return filterObj.sort((a,b) => a.word.length - b.word.length )[0];
    }
    
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;



