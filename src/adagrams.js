const LETTERHASH = {
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
  Z: 1
}

const Adagrams = {
  drawLetters() {
  let letters = [];
  
  for (const [key, value] of Object.entries(LETTERHASH)) {
    for (let i = 0; i < value + 1; i += 1) {
      letters.push(key);
    }
  }

  const sampleTen = []
  for (let i = 0; i < 10; i += 1) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    sampleTen.push(randomLetter)
  }
  return sampleTen;

  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandCopy = [...lettersInHand]; // spread operator: shallow copy

    for(let letter of input) { 
      if (lettersInHandCopy.includes(letter)) {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
  return true;  
  },

  scoreWord(word) {
    const wordSplit = word.toLowerCase().split('');
    let score = 0;

    for (let letter of wordSplit) {
      switch(letter) {
        case 'a': case 'e': case 'i': case 'o': case 'u': case 'l': case 'n': case 'r': case 's': case 't':
          score += 1;
          break;
        case 'd': case 'g':
          score += 2;
          break;
        case 'b': case 'c': case 'm': case 'p':
          score += 3;
          break;
        case 'f': case 'h': case 'v': case 'w': case 'y':
          score += 4;
          break;  
        case 'k':
          score += 5;
          break;
        case 'j': case 'x':
          score += 8;
          break;
        case 'q': case 'z':
          score += 10;
          break;    
      }
    }    

    if (wordSplit.length > 6 && wordSplit.length < 11) {
      score += 8;
    }

    return score
  },

  highestScoreFrom(words) {
    let wordScores = []

    for (let word of words) {
      let eachWordObject = {};
      eachWordObject['word'] = word;
      eachWordObject['score'] = this.scoreWord(word);

      wordScores.push(eachWordObject);
    }

    let highestScoreWord = ''
    let highestScore = 0
    let winningWord = {}

    for (let word of wordScores) {
      if (word['score'] > highestScore) {
        highestScoreWord = word['word'];
        highestScore = word['score'];
      } else if (word['score'] === highestScore) {

        // if same length, prefer word that has 10 letters if applicable
        if (word['word'].length === 10 && highestScoreWord.length !== 10) {
          highestScoreWord = word['word'];
          highestScore = word['score'];
        // otherwise prefers the word with the fewest letters
        } else if (word['word'].length < highestScoreWord.length && highestScoreWord.length !== 10) { 
          highestScoreWord = word['word'];
          highestScore = word['score'];
        }
      }
    }

    winningWord['word'] = highestScoreWord
    winningWord['score'] = highestScore

    return winningWord
  }
};

// Wave 4 Pseudocode
// Do a for...of loop thru each word in the words array
// Within that loop:
//   Create an object for each word with 2 key,value pairs:
//   1. key: word, value: word from the words array
//   2. key: score, value: score for that word (calling scoreWord function)
//   Push the object into the wordScores array
// Result: wordScores array with each word and its score per object

// A for...of loop thru each of the objects in the wordScores array created above
// IF STATEMENT: DETERMINES HIGHEST SCORING WORD
//   if the score of the word is greater than the highestScore, which begins at 0,
//     that word becomes the highestScoreWord
//     the highestScore is adjusted to be the score of the highestScoreWord
// ELSE IF STATEMENT: BREAKS TIES WHEN SCORES ARE THE SAME
//   if the word's length is 10 and the length of the current highestScoreWord isn't 10
//     that word becomes the new highestScoreWord
//     update highestScore to reflect the score of this new word
//   else if the word's length is not 10 and the scores are the same
//     exit statement because the first one in the array should be chosen

// Add the highestScoreWord as the value for the word key in the winningWord object
// Add the highestScore as the value for the score key in the winningWord object

// Return the winningWord object

// console.log(Adagrams.highestScoreFrom(['beep', 'bop', 'boopboopbb', 'zzzq']))

// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
