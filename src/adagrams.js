const Adagrams = {
  drawLetters: function() {
    const letterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M',
      'M', 'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y',
      'Z'];
      const lettersInHand = [];
      for (let i = 0; i < 10; i += 1){
        const indexUsed = Math.floor(Math.random()*letterPool.length);
        lettersInHand.push(letterPool[indexUsed]);
        letterPool.splice(indexUsed, 1);
      }
      return lettersInHand;
  },
  

  duplicateArrayDeepCopy: function(array){
    const deepCopyArray =[];
    for(const character of array){
      deepCopyArray.push(character);
    }
    return deepCopyArray;
  },

  usesAvailableLetters: function(input, lettersInHand) {
    const newLettersInHand = this.duplicateArrayDeepCopy(lettersInHand);

  for(const character of input.toUpperCase()){
    if (newLettersInHand.includes(character)){
      let position = newLettersInHand.indexOf(character);
      newLettersInHand.splice(position, 1);
    }else{
      return false;
    }
  }
  return true;
},

scoreWord: function(word) {

  let score = 0;

  const wordCharArray = word.toUpperCase();

  for(const character of wordCharArray){
    switch (character) {
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
      score += 1;
      break;
    case 'D':
    case'G':
      score += 2;
      break;
    case 'B':
    case 'C':
    case 'M':
    case 'P':
      score += 3;
      break;
    case 'F':
    case 'H':
    case 'V':
    case 'W':
    case 'Y':
      score += 4;
      break;
    case 'K':
      score += 5;
      break;
    case 'J':
    case 'X':
      score += 8;
      break;
    case 'Q':
    case 'Z':
      score += 10;
      break;
  }}

  if (wordCharArray.length >= 7){
    score += 8
  };

  return score;
},

highestScoreFrom: function(words){
  let winner = {word: null, score: 0};
  
  for(const word of words){
    const score = this.scoreWord(word);
    if (score > winner.score){
        winner.word = word;
        winner.score = score;
      }else if (score === winner.score){
        if (((winner.word).length !== 10) && (word.length < (winner.word).length || word.length === 10)){
          winner.word = word;
          winner.score = score;
        }
      }  
  }
  return winner;
}
};

// Do not remove this line or your tests will break!
export default Adagrams;