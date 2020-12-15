import _, { result, shuffle } from 'underscore'; 

const printValue = (value, letter) => {
  const newArrayLetter = [];
    for (let i = 0; i < value; i++) {
      newArrayLetter.push(letter);
    }; 
    return newArrayLetter;
};

const letterPool = [
  printValue(1, 'A'),
  printValue(2, 'B'),
  printValue(2, 'C'),
  printValue(4, 'D'),
  printValue(12, 'E'),
  printValue(2, 'F'),
  printValue(3, 'G'),
  printValue(2, 'H'),
  printValue(9, 'I'),
  printValue(1, 'J'),
  printValue(1, 'K'),
  printValue(4, 'L'),
  printValue(2, 'M'),
  printValue(6, 'N'),
  printValue(8, 'O'),
  printValue(2, 'P'),
  printValue(1, 'Q'),
  printValue(6, 'R'),
  printValue(4, 'S'),
  printValue(6, 'T'),
  printValue(4, 'U'),
  printValue(2, 'V'),
  printValue(2, 'W'),
  printValue(1, 'X'),
  printValue(2, 'Y'),
  printValue(1, 'Z')
]

// console.log(letterPool);

const poolCreate = (letterPool) => {
  const letterPoolToDrawFrom = [];
  letterPool.forEach((letters) => { //for each array of letters of letterPool
    letters.forEach((letter) => { // for each letter of array of letters
      letterPoolToDrawFrom.push(letter)//push each letter into the pool of letter
    }); 
  });
  return letterPoolToDrawFrom;
};

// console.log(poolCreate(letterPool));

const shuffleLetterPool = (array) => {
  // Starting at the end of the array/last index
  // Move toward the first index/front of the array
  for (let i = array.length - 1; i > 0; i--) {
    // Math.random returns a random number between the range of 0...1 
    // * by a number = (0*num)...(1*num)
    // if array.length = 50, j is random num between 0 and 49
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const Adagrams = {
  drawLetters: function() {
    // Implement this method for wave 1
    // const shuffleLetterPoolToDrawFrom = _.shuffle(poolCreate(letterPool));
    const shuffleLetterPoolToDrawFrom = shuffleLetterPool((poolCreate(letterPool)));

    const letterInHand = []
    for (let i = 0; i < 10; i++) {
      const drawLetter = shuffleLetterPoolToDrawFrom.pop();
      letterInHand.push(drawLetter);
    };
    return letterInHand;
  },

  usesAvailableLetters: function(wordCreated, letterInHand) {
    // Wave 2
    let letterInHandCopy = Array.from(letterInHand);
    const word = wordCreated.toUpperCase().split('');

    for (const char of word) {
      if (!letterInHandCopy.includes(char)) {
        return false;
      } else {
        letterInHandCopy.splice(letterInHandCopy.indexOf(char), 1);
      }
    }
    return true;
  },

  scoreWord: function(wordCreated) {
    // Wave 3
    const word = wordCreated.toUpperCase().split('');
    let value = 0;

    for (const char of word) {
      switch(char) {
        case '':
          value = 0;
          break;
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T':
          value += 1;
          break;
        case 'D':
        case 'G':
          value += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          value += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          value += 4;
          break;
        case 'K':
          value += 5;
          break;
        case 'J':
        case 'X':
          value += 8;
          break;
        case 'Q':
        case 'Z':
          value += 10;
          break;
        // default: 
        //   alert (`Your word contains ${char} an invalid character. `);
        //   break;
      };
    };
    if (word.length >= 7) {
      value = value + 8 
    }
    return value;
  },

  highestScoreFrom: function(words)  {

    const highScore = {
      word: '',
      score: 0
    };

    let highScoreWords = [];

    for (const word of words) {
      let score = this.scoreWord(word);

      if (highScore.score < score) {
        highScore.score = score;
        highScore.word = word;
        highScoreWords = [word]; 
      } else if (highScore.score === score) {
        highScoreWords.push(word);
      }
    }
    // create a helper function to handle tie
    const sortedHighScoreWords = highScoreWords.sort((a, b) => a.length - b.length);

    if (sortedHighScoreWords.length > 1 ) { // was there a tie?
      if (sortedHighScoreWords[sortedHighScoreWords.length - 1].length === 10) { // was there a 10-letter word?
        for (const word of sortedHighScoreWords) {
          if (word.length === 10) {
            return { word: word, score: highScore.score };
          }
        }
      } 
      return { word: sortedHighScoreWords[0], score: highScore.score };
      // } else if (sortedHighScoreWords[0].length !== sortedHighScoreWords[1].length) {
      //   return { word: sortedHighScoreWords[0], score: highScore.score };
      // }
    }
    return  highScore;
    
  }
};
// console.log(Adagrams.scoreWord('hello'));
// console.log(Adagrams.usesAvailableLetters(wordCreated, letterInHand));
// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
