const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const handSize = 10;
    const lettersCount = { "A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L":  4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S":  4, "T": 6, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1 };
    let letterPool = "";
    for (const [letter, value] of Object.entries(lettersCount)) {
      letterPool += letter.repeat(value);
    }
    let hand = [];
    for (let i = 0; i < handSize; i++) {
      let randIndex  = Math.floor(Math.random() * letterPool.length);
      let randLetter = letterPool.slice(randIndex, randIndex + 1);
      hand.push(randLetter);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let handCopy = Array.from(lettersInHand);
    for(let i = 0; i < input.length; i++) {
      let letter = input[i];
      if(handCopy.includes(letter)) {
        handCopy.splice(handCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
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
    const lettersScore = { "A": 1, "B": 3, "C":  3, "D": 2, "E":  1, "F": 4, "G": 2, "H": 4, "I": 1, "J":  8, "K": 5, "L":  1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S":  1, "T": 1, "U": 1, "V": 4, "W": 4, "X":  8, "Y": 4, "Z": 10 };
    word = word.toUpperCase()
    let score = 0;
    for(let i = 0; i < word.length; i++) {
      score += lettersScore[word[i]];
    }
    if (word.length >= 7 && word.length <= 10) score += 8;
    return score;
  },

  highestScoreFrom(words) {
    let maxScore = Math.max(...words.map(word => this.scoreWord(word))); // find the maximum score from all the words
    let highScoreArr = words.filter(word => this.scoreWord(word) === maxScore); // find the words that has the maximum score

    if (highScoreArr.length === 1) {
      return {word: highScoreArr[0], score: maxScore};
    }

    let minLength = Math.min(...highScoreArr.map(word => word.length == 10 ? 0 : word.length));
    let shortestWords = highScoreArr.filter(word => (word.length == 10 ? 0 : word.length) === minLength);
    return {word: shortestWords[0], score: maxScore};
  },

  // tieBreaker(highScoreArray) {

  //   let minLength = 10;

  //   for(const word of highScoreArray) {
  //     if (word.word.length === minLength) {
  //       return word;
  //     };
  //   };

  //   for(const word of highScoreArray) {
  //     if (word.word.length < minLength) {
  //       minLength = word.word.length;
  //     };
  //   };
      
  //   for(const word of highScoreArray) {
  //     if (word.word.length === minLength) {  
  //       return word; 
  //     };
  //   };
  // },

};

// Do not remove this line or your tests will break!
export default Adagrams;