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
    const letters = [];

    for (const [key, value] of Object.entries(LETTERHASH)) {
      for (let i = 0; i < value + 1; i += 1) {
        letters.push(key);
      }
    }

    letters.sort(function(a, b) {return 0.5 - Math.random()});
    return letters.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputSplit = input.split('');
    const lettersInHandCopy = [...lettersInHand];
    
    for (let letter of input) {
      if (!lettersInHandCopy.includes(letter)) {
        return false;
      } else {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      }
    }
    return true;
  },

  scoreWord(word) {
    let wordSplit = word.toLowerCase();
    wordSplit = wordSplit.split('');
    let score = 0;
    for (let letter of wordSplit) {
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'l' || letter === 'n' || letter === 'r' || letter === 's' || letter === 't') {
        score += 1;
      } else if (letter === 'd' || letter === 'g') {
        score += 2;
      } else if (letter === 'b' || letter === 'c' || letter === 'm' || letter === 'p') {
        score += 3;
      } else if (letter === 'f' || letter === 'h' || letter === 'v' || letter === 'w' || letter === 'y') {
        score += 4;
      } else if (letter === 'k') {
        score += 5;
      } else if (letter === 'j' || letter === 'x') {
        score += 8;
      } else if (letter === 'q' || letter === 'z') {
        score += 10;
      }
    }

    if (word.length > 6 && word.length < 11) {
      score += 8;
    }
    return score;
  },

  highestScoreFrom(words) {
    //initialize empty array to store word objects
    const wordsArray = [];

    //iterate through words array and make an object for each word including the word string and the score
    for (let word of words) {
      let newObject = {};
      newObject['word'] = word;
      newObject['score'] = this.scoreWord(word);

      //push object into the new array
      wordsArray.push(newObject);
    }

    //initialize winningWord object with word as empty string and score as 0
    let winningWord = {'word': '', 'score': 0};

    //iterate through array to compare current score to highest score
    for (let wordObject of wordsArray) {

      //if current object score > current highest score then current object becomes winning object
      if (wordObject.score > winningWord.score) {
        winningWord['word'] = wordObject.word;
        winningWord['score'] = wordObject.score;

      //else if scores are equal
      } else if (wordObject.score === winningWord.score) {
        
        //if the word length is 10 and the current highest score is not 10
        if (wordObject.word.length === 10 && winningWord.word.length !== 10) {

          //new highest score word is the current one
          winningWord['word'] = wordObject.word;
          winningWord['score'] = wordObject.score;

        //else if word length is shorder than current highest score and the highest score word length is not 10
        } else if (wordObject.word.length < winningWord.word.length && winningWord.word.length !== 10) {

          //new highest score word is the current word
          winningWord['word'] = wordObject.word;
          winningWord['score'] = wordObject.score;
        }
      }
    }

    //return the winning word object
    return winningWord;
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
