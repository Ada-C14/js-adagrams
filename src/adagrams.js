const letterQuantities = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
};

const letterScore = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
};


const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    
    // added the appropriate number of each letter in an array
    let lettersArray = [];

    for (const [key, value] of Object.entries(letterQuantities)) {
      for(let i = 0; i < value; i++) {
        lettersArray.push(key);
      } 
    };

    // shuffles the letters array
    for (let i = lettersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = lettersArray[i];
      lettersArray[i] = lettersArray[j];
      lettersArray[j] = temp;
    }

    // takes the first 10 letters of the array
    return lettersArray.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {

    const hand = {}
    
    // stores the letters as keys and count as the value
    for (const letter of lettersInHand) {
      if (hand[letter]) {
        hand[letter] += 1;
      } else {
        hand[letter] = 1;
      }
    }

    // checks the letters of unput against the hand object
    for (const letter of input) {
      if (!hand[letter] || hand[letter] === 0) {
        return false;
      } else if (hand[letter]) {
        hand[letter] -= 1; // if there is a match, reduce count by one
      }
    }

    return true;

  },

  scoreWord(word) {
    
    const uppercaseWord = word.toUpperCase();
    
    let sum = 0

    for (const letter of uppercaseWord) {
      sum += letterScore[letter];
    };

    if (word.length > 6) sum += 8;
    
    return sum;
  },

  highestScoreFrom(words) {

    // prefer word with fewest letters
    // unless word is 10 letters
    // multiple words with same length, choose first word

    // find the highest score
    // find if there are more than one highest score
  
    
    
    let highestScore = 0

    for (const word of words) {
      const score = this.scoreWord(word);
      if (score > highestScore) {
        highestScore = score
      };
    };

    console.log(highestScore)

    const highestScoreWords = words.filter(word => this.scoreWord(word) === highestScore);

    console.log(highestScoreWords);
    const tenLetters = highestScoreWords.find(word => word.length === 10);


    const leastLetters = (words) => {
      let leastLetterWord = words[0];
      let count = words[0].length;

      for (const word of words) {
        const length = word.length;

        if (length < count) {
          leastLetterWord = word;
          count = length;
        }
      }

      return leastLetterWord
    };

    console.log(leastLetters(highestScoreWords))


    let winningWord = {}

    if (highestScoreWords.length === 1) {
      
      winningWord['word'] = highestScoreWords[0];
      winningWord['score'] = highestScore;
      
    } else if (tenLetters) {

      winningWord['word'] = tenLetters;
      winningWord['score'] = highestScore;

    } else {

      winningWord['word'] = leastLetters(highestScoreWords);
      winningWord['score'] = highestScore;

    }

    return winningWord;
  }


};

// Adagrams.highestScoreFrom(['X', 'XX', 'XXX', 'XXXX', 'XXXX', 'XXXXXXXXXX']);
// Do not remove this line or your tests will break!
export default Adagrams;
