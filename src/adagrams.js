const Adagrams = {
  // Wave 1
  drawLetters() {
    const letterPool = ('A'.repeat(10) + 'B'.repeat(2) + 'C'.repeat(2) + 'D'.repeat(4) + 'E'.repeat(12) + 'F'.repeat(2) + 'G'.repeat(3) + 'H'.repeat(2) + 'I'.repeat(9) + 'J' + 'K' + 'L'.repeat(4) + 'M'.repeat(2) + 'N'.repeat(6) + 'O'.repeat(8) + 'P'.repeat(2) + 'Q' + 'R'.repeat(6) + 'S'.repeat(4) + 'T'.repeat(6) + 'U'.repeat(4) + 'V'.repeat(2) + 'W'.repeat(2) + 'X' + 'Y'.repeat(2) + 'Z').split('');

    const letterHandIndices = [];
    do {
      let newIndex = Math.floor(Math.random() * letterPool.length);
      if (!letterHandIndices.includes(newIndex)) {
      letterHandIndices.push(newIndex) }
    }
    while (letterHandIndices.length < 10);

    const letterHand = [];
    
    letterHandIndices.forEach( function(index) {
    letterHand.push(letterPool[index]) 
    });
    return letterHand 
  },

  // Wave 2
  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandCopy = Array.from(lettersInHand);
    const inputArray = input.split('');
    let validHand = true
    inputArray.forEach( function(char) {
      if (lettersInHandCopy.includes(char)) {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(char), 1)
      }
      else { validHand = false; 
      }  
    });
  return validHand
  },

  // Wave 3
  scoreWord(word) {
    const scores = {
    "AEIOULNRST": 1,
    "DG": 2,
    "BCMP": 3,
    "FHVWY": 4,
    "K": 5,
    "JX": 8,
    "QZ": 10
  } 
  const wordArray = word.toUpperCase().split('');
  let wordScore = 0;

  wordArray.forEach( function(char) {
    for (const key in scores) {
      if (key.includes(char)) {
        wordScore += scores[key];
      }
    }
  });
  if (wordArray.length > 6) {
    wordScore += 8;
  }

  return wordScore
  },
  
  // Wave 4
  highestScoreFrom(words) {
    let wordStats = words.map(x => ( { word: x, score: this.scoreWord(x) } ));
    
    wordStats.sort(function (a, b) { 
      return b.score - a.score;
    });
    console.log(wordStats);

    let bestWord = wordStats[0];
    console.log(`the word with best score after sorting is ${bestWord.word}`)

    for (const element of wordStats) { 
      if (element.score === bestWord.score && element.word.length === 10) {
        return element
      } else if (element.score === bestWord.score && element.word.length <      bestWord.word.length) {
          bestWord = element
        }
    }
    return bestWord
  },
}


// Do not remove this line or your tests will break!
export default Adagrams;
