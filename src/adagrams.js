const Adagrams = {
  drawLetters() {
    const letterQuantity = {"A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S": 4, "T": 2, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1};

    let letterPool = [];

    // method for doing something 'x' times
    const times = x => f => {
      if (x > 0) {
        f();
        times (x - 1) (f);
      }
    }

    for (let letter in letterQuantity) {
      // add letter to the letter pool array the quantity (value) # of times
      times (letterQuantity[letter]) (() => letterPool.push(letter)); 
    };

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // swap the last element array[i] with the random element array[j] and decriment i, then the entire list will be random
      }
      return array;
    };

    return shuffle(letterPool).slice(0, 10); // shuffle the letter pool and take the first 10 letters
  },

  usesAvailableLetters(input, lettersInHand) {
    let lettersInHandCopy = [...lettersInHand];

    for (const letter of input) {
      if (!lettersInHandCopy.includes(letter)) {
        return false;
      } else {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;

    for (const letter of word) {
      if (letter.match(/[AEIOULNRST]/i)) {
        score += 1;
      } else if (letter.match(/[DG]/i)) {
        score += 2;
      } else if (letter.match(/[BCMP]/i)) {
        score += 3;
      } else if (letter.match(/[FHVWY]/i)) {
        score += 4;
      } else if (letter.match(/[K]/i)) {
        score += 5;
      } else if (letter.match(/[JX]/i)) {
        score += 8;
      } else if (letter.match(/[QZ]/i)) {
        score += 10;
      }
    }

    if (word.length > 6) {
      score += 8
    }

    return score;
  }, 

  highestScoreFrom(words) {
    let scores = [];
    
    for (let word of words) {
      scores.push({word: word, score: this.scoreWord(word)});
    }
    
    let highestScorer = scores[0];
    // iterate through scores and if the selected score > highestScorer, save it over
    for (let item of scores) {
      if (item['score'] > highestScorer['score']) {
        highestScorer = item;
      } 
    }

    let ties = []

    for (let item of scores) {
      if (item['score'] === highestScorer['score']) {
        ties.push(item);
      } 
    }

    console.log(ties)

    let winner = ties.find(word => word['word'].length == 10 ) // finds the fir st word with ten letters

    if (winner) {
      return winner;
    } else { // find the word with min length
      winner = ties[0]
      for (let item of ties) {
        if (item['word'].legth < winner.word.length) {
          winner = item
        }
      }
      return winner
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
