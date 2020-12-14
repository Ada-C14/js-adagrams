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
  drawLetters () {
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

  usesAvailableLetters (wordCreated, letterInHand) {
    // Wave 2
    const letterInHandCopy = Array.from(letterInHand);
    const word = wordCreated.toUpperCase().split('');
    for (const char of word) {
      if (!letterInHandCopy.includes(char)) {
        return false;
      }
    }
    return true;
  },

  scoreWord(wordCreated) {
    // Wave 3
    const word = wordCreated.toUpperCase().split('');
    let value = 0;

    for (const char of word) {
      switch(char) {
        case '':
          value = 0;
          break;
        case 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T':
          value += 1;
          break;
        case 'D', 'G':
          value += 2;
          break;
        case 'B', 'C', 'M', 'P':
          value += 3;
          break;
        case 'F', 'H', 'V', 'W', 'Y':
          value += 4;
          break;
        case 'K':
          value += 5;
          break;
        case 'J','X':
          value += 8;
          break;
        case 'Q', 'Z':
          value += 10;
          break;
        // default: 
        //   alert (`Your word contains ${char} an invalid character. `);
        //   break;
      };

      let wordScores = value;
      if (word.length >= 7) {
        wordScores = value + 8 
      }
      return wordScores;
    };

  },

}

// console.log(Adagrams.usesAvailableLetters(wordCreated, letterInHand));
// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
