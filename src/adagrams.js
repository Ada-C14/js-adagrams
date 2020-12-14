const Adagrams = {
  drawLetters() {
    const lettersDrawn = []
    const letterDistribution = {
      "A": 9,
      "B": 2,
      "C": 2,
      "D": 4,
      "E": 12,
      "F": 2,
      "G": 3,
      "H": 2,
      "I": 9,
      "J": 1,
      "K": 1,
      "L": 4,
      "M": 2,
      "N": 6,
      "O": 8,
      "P": 2,
      "Q": 1,
      "R": 6,
      "S": 4,
      "T": 6,
      "U": 4,
      "V": 2,
      "W": 2,
      "X": 1,
      "Y": 2,
      "Z": 1,
      pickRandomLetter(){
        return Object.keys(this)[Math.floor(Math.random() * Math.floor(Object.keys(this).length - 1))];
      },
    }

    for (let i = 0; i < 10; i++) {
      let letter = letterDistribution.pickRandomLetter();

      while(letterDistribution[letter] === 0) {
        letter = letterDistribution.pickRandomLetter();
      }

      lettersDrawn.push(letter);
      letterDistribution[letter] -= 1;
    }
   
    return lettersDrawn;
  },

  usesAvailableLetters(input, lettersInHand){
    let allLettersIncluded = true

    for(let letter of input){
      if (lettersInHand.includes(letter)){
        let letterToRemove = lettersInHand.indexOf(letter);
        lettersInHand.splice(letterToRemove, 1)
      } else {
        allLettersIncluded = false;
        break;
      }
    }
    return allLettersIncluded
  },

  scoreWord(word){ 
    const wordLength = word.length;
    let totalPoints = 0;
    
    for(let letter of word) {
      switch(letter.toUpperCase()){
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
          totalPoints += 1;
          break;
        case 'D':
        case 'G':
          totalPoints += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          totalPoints += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          totalPoints += 4;
          break;
        case 'K':
          totalPoints += 5;
          break;
        case 'J':
        case 'X':
          totalPoints += 8;
          break;
        case 'Q':
        case 'Z':
          totalPoints += 10;
          break;
      }
    }

    if (wordLength > 6 && wordLength < 11){
      totalPoints += 8;
    }

    return totalPoints;
  },

  highestScoreFrom(words){
    const highestScore = {
      'score': 0
    };

    words.forEach(function(word) {
      let score = Adagrams.scoreWord(word);
      
      if (score > highestScore['score']) {
        highestScore['word'] = word;
        highestScore['score'] = score;
      } else if (score === highestScore['score']) {
        if (word.length === highestScore['word'].length){
          // do nothing - choose first
        } else if (word.length === 10) {
          highestScore['word'] = word;
          highestScore['score'] = score;
        } else if (word.length < highestScore['word'].length && highestScore['word'].length < 10){
          highestScore['score'] = score;
          highestScore['word'] = word;
        }
      }
    });
    return highestScore
  } 
};

// Do not remove this line or your tests will break!
export default Adagrams;
