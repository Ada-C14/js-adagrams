const Adagrams = {
  //WAVE ONE: Our first job is to build a hand of 10 letters. To do so, add a function called drawLetters inside of the Adagrams object in src/adagrams.js. 
  drawLetters () {
    const alphabet = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    };

    const hand = [];

    const onlyLetters = Object.keys(alphabet);

    //ASSIGNMENT REQ: The letters should be randomly drawn from a pool of letters
    //Randomization adapted from from w3resource explanation of random approaches in JS: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
    const randomItem = items => items[Math.floor(Math.random() * items.length)];
    //close random_item
    let tile = undefined;
    //ASSIGNMENT REQ: Each string should contain exactly one letter
    while (hand.length < 10) {
      tile = (randomItem(onlyLetters));

      if (alphabet[tile] > 0) {
        alphabet[tile] -= 1;
        hand.push(tile);
      }//close if
    }//close while loop used to make hand
    return hand;
  },//close drawLetters

  //WAVE TWO: add a function called usesAvailableLetters
  usesAvailableLetters (input, lettersInHand) {
    let result = true;

    input.split("").forEach((letter) => {
      if (lettersInHand.includes(letter) && result != false) {
        lettersInHand.splice(lettersInHand.indexOf(letter), 1);
      } else {
        result = false;
      }
    });

    return result;
  },

  //WAVE THREE: Make a function named scoreWord in the Adagrams object
  //ASSIGNMENT REQ: Has one parameter: word, which is a string of characters
  scoreWord (word) {
    let score = 0;
    word = word.toUpperCase().split("");

    const letterScores = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
    //ASSIGNMENT REQ: Each letter within word has a point value. The number of points of each letter is summed up to represent the total score of word
    word.forEach(function (letter) {
      score = score + letterScores[letter];
    })//closes forEach
    //ASSIGNMENT REQ: If the length of the word is 7, 8, 9, or 10, then the word gets an additional 8 points
    if (word.length > 6) {
      score += 8;
    }
    //Returns an integer representing the number of points
    return score;
  },//closes scoreWord

  //WAVE FOUR: Add a function named highestScoreFrom
  //ASSIGNMENT REQ: Has one parameter: words, which is an array of strings
  highestScoreFrom (words) {
    //ASSIGNMENT REQ: Returns a single object that represents the data of a winning word and its score. The object should have the following keys:
    let score = {}
    let winner = 0

    //ASSIGNMENT REQ: word, whose value is a string of a word
    //ASSIGNMENT REQ: score, whose value is the score of that word
    words.forEach((word) => {
      if (this.scoreWord(word) > winner) {
        winner = this.scoreWord(word);
        score['score'] = this.scoreWord(word);
        score['word'] = word;
      }
      //ASSIGNMENT REQ: In the case of tie in scores, use these tie-breaking rules:
      else if (this.scoreWord(word) === winner) {
        // prefer the word that has 10 letters
        if (score['word'].length === 10) {
          winner;
        }
        else if (word.length === 10) {
          score['score'] = this.scoreWord(word);
          score['word'] = word;
        }
        //ASSIGNMENT REQ: prefer the word with the fewest letters...
        else if (score['word'].length > word.length) {
          score['score'] = this.scoreWord(word);
          score['word'] = word;
        }
        //ASSIGNMENT REQ: If the there are multiple words that are the same score and the same length, pick the first one in the supplied list
        else if (score['word'].length == word.length) {
          winner;
        }
      }
    });
    return score;
  },
}//close Adagrams -- PUT EVERYTHING ABOVE HERE

// Do not remove this line or your tests will break!
export default Adagrams;