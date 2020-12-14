//wave 5
class Adagrams {

  static drawLetters() {
    const handSize   = 10;
    const letterCount = { "A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L":  4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S":  4, "T": 6, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z":  1 };
    
    let letterPool = "";
    for (const [letter, value] of Object.entries(letterCount)) { 
      letterPool += letter.repeat(value);
    };

    const hand = [];
    for (let i = 0; i < handSize; i++) {
      let randIndex  = Math.floor(Math.random() * letterPool.length);
      let randLetter = letterPool.slice(randIndex, randIndex + 1);
      hand.push(randLetter);
    } 
    return hand;
  }
  

  usesAvailableLetters(input, lettersInHand) {
    input = input.split('');
    let tally = {};

    for(const letter of lettersInHand) {
      if (tally[letter]) {
        tally[letter] += 1;
      } else {
        tally[letter] = 1;
      };
    };

    for(const letter of input) {
      if (tally[letter] && tally[letter] > 0) {
        tally[letter] -= 1;
      } else {
        return false;
      };
    };
    return true;
  },


  scoreWord(word) {
    let sum = 0;
    word = word.toUpperCase().split('')
    
    if (word.length > 6) {sum += 8};

    for(const letter of word) {
      sum += lettersScore[letter];
    };
    return sum;
  },

  scoreWord(word) {
    let sum = 0;
    word = word.toUpperCase().split('')
    
    if (word.length > 6) {sum += 8};

    for(const letter of word) {
      sum += lettersScore[letter];
    };

    return sum;
  },

  highestScoreFrom(words) {
    let scores = [];
    let maxScore = 0;
    let bestWord = {};
    let highScoreArray = [];

    words.forEach(word => {
      scores.push({word: word, score: this.scoreWord(word)});
    });

    for(let i = 0; i < scores.length; i++) {
      if (scores[i].score > maxScore) {
        maxScore = scores[i].score;
      };
    };

    for(let i = 0; i < scores.length; i++) {
      if (scores[i].score === maxScore) {
        highScoreArray.push(scores[i]);
      };
    };

    if (highScoreArray.length > 1) {
      bestWord = this.tieBreaker(highScoreArray);
    } else {
      bestWord = highScoreArray[0];
    };

    return bestWord;
  },

  tieBreaker(highScoreArray) {
    let minLength = 10;

    for(const word of highScoreArray) {
      if (word.word.length === minLength) {
        return word;
      };
    };

    for(const word of highScoreArray) {
      if (word.word.length < minLength) {
        minLength = word.word.length;
      };
    };
      
    for(const word of highScoreArray) {
      if (word.word.length === minLength) {  
        return word; 
      };
    };
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
