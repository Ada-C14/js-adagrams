const pool = {
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
  'Z': 1,
};
class Adagrams {

  static drawLetters() {
    let allLetters = [];
    const newPool = JSON.parse(JSON.stringify(pool));

    for (const [key, value] of Object.entries(newPool)){
      allLetters.push(new Array(value).fill(key));
    }
    allLetters = allLetters.flat();

    const playersLetters = [];
    for (let i = 0; i < 10; i += 1){
      const letter = allLetters[Math.floor(Math.random() * allLetters.length)];
      playersLetters.push(letter);
      allLetters.splice(allLetters.indexOf(letter), 1);
    }
    return playersLetters;
  }

  static usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length){
      return false;
    }
    for (const char of input){
      if (!lettersInHand.includes(char)) {
        return false;
      }
      lettersInHand.splice(lettersInHand.indexOf(char), 1);
    }
    return true;
  }

  static scoreWord(word) {
    let score = 0;
    for (const char of word){
      if (char.match(/[AEIOULNRST]/ig)) {
        score += 1;
      } else if (char.match(/[DG]/ig)) {
        score += 2;
      } else if (char.match(/[BCMP]/ig)) {
        score += 3;
      } else if (char.match(/[FHVWY]/ig)) {
        score += 4;
      } else if (char.match(/[K]/i)) {
        score += 5;
      } else if (char.match(/[JX]/ig)) {
        score += 8;
      } else if (char.match(/[QZ]/ig)) {
        score += 10;
      }
    }
    if ([7, 8, 9, 10].includes(word.length)){
      score += 8
    }
    return score;
  }


  static highestScoreFrom(words){
    let scoreArray = [];
    for (const word of words){
      const pair = {}
      pair[word] = this.scoreWord(word)
      scoreArray.push(pair)
    }

    // get the max score
    let maxScore = 0;
    scoreArray.forEach( function(pair) {
      if (Object.values(pair)[0] > maxScore){
        maxScore = Object.values(pair)[0];
      }
    });

    // only keep words with max score
    scoreArray = scoreArray.filter(pair => Object.values(pair) == maxScore)

    // get the min length
    let minLength = Object.keys(scoreArray[0])[0].length;
    scoreArray.forEach( function(pair) {
      let wordLength = Object.keys(pair)[0].length;
      if (wordLength < minLength) {
        minLength = wordLength;
      }
    })
    
    const winner = this.findWinner(10, scoreArray, maxScore);
    if (winner){
      return winner;
    }

    return this.findWinner(minLength, scoreArray, maxScore);
    }

    static findWinner(length, winningArray, maxScore){
      winningArray = winningArray.filter(pair => Object.keys(pair)[0].length == length);
    
      if (!winningArray.length == 0){
        return {'word': Object.keys(winningArray[0])[0], score: maxScore};
      }
      return false;
    }

}

// Do not remove this line or your tests will break!
export default Adagrams;