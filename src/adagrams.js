import _ from 'lodash';
// var _ = require('lodash');

    //letters/frequencies object
    const LETTERS = {A : 9, B : 2, C : 2, D : 4, E : 12, F : 2, G : 3, H : 2, I : 9, J : 1, K : 1, L : 4, M : 2, N : 6, O : 8, P : 2, Q : 1, R : 6, S : 4, T : 6, U : 4, V : 2, W : 2, X : 1, Y : 2, Z : 1 };

      //method to remove specific value from array
  function removeItemsOnce(array, value) {
    let index = array.indexOf(value);
    array.splice(index, 1);
    return array;
  };

const Adagrams = {
  drawLetters() {
    //Letters will now be populated for game play! Start with an empty array. Pulling from const LETTERS hash.
    let letters = [];

    //populate array with the correct number of letters (frequencies)
    for (let [key] in LETTERS) {
      for(let i = 1; i <= LETTERS[key]; i++) {
        letters.push(key);
        
      }
    }
    //create a 'sample' method to return a sampling of tiles
    const randomTenTiles = _.sampleSize; //_.sampleSize is lodash npm
    let drawn = randomTenTiles(letters, 10);
    return drawn;
  },

  //input = word played
  usesAvailableLetters(input, lettersInHand) {
    let playedTiles = input.toUpperCase().split('');
    let dupLettersInHand = Array.from(lettersInHand);
    // console.log(playedTiles);
    if (playedTiles.length <= lettersInHand.length) {
      for (let letter of playedTiles) {
        if (dupLettersInHand.includes(letter)) {
          removeItemsOnce(dupLettersInHand, letter); //calling function to delete tile from copied array. 
        }
        else {
          return false;
        };
      };
      return true;
      
        return false;
      }
      {
      return false;
      }
    },
  scoreWord(word) {
    let word_array = word.toUpperCase().split('');
    let score = 0;
    if (word_array.length > 6) {
      score += 8;
    }
    for (let letter of word_array) {
      switch (letter) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        case "L":
        case "N":
        case "R":
        case "S":
        case "T":
          score += 1;
          break;
        case "D":
        case "G":
          score += 2;
          break;
        case "B":
        case "C":
        case "M":
        case "P":
          score += 3;
          break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
          score += 4;
          break;
        case "K":
          score += 5;
          break;
        case "J":
        case "X":
          score += 8;
          break;
        case "Q":
        case "Z":
          score += 10;
          break;
    }
  }
  return score;
  },

  //heavily relied on my Adagrams.rb program for this part. Translated into js. 
  //hardest part was indentation, finding my 'ends', and semicolon syntax. Took awhile to get this code to work due to poor indentation and mixed up end braces. 
  highestScoreFrom(words) {
    //scenario 1: single high scoring word
    let bestWords = [];
    let highestScore = 0;
    let winningWord = [];
    let winner = {};
    let tieBreaker = [];

    for (let word of words) {
      if (this.scoreWord(word) > highestScore) {
        bestWords = []; //clear bestWords array
        bestWords.push(word);
        highestScore = this.scoreWord(word);
      }
      else if (this.scoreWord(word) === highestScore) {
        bestWords.push(word);
      }
    } // end for loop
    if (bestWords.length > 1) {
      let wordLength = 10;
      for (let word of bestWords) {
        if (word.length === 10) {
          tieBreaker = [];//clear tie_breaker array
          tieBreaker.push(word);
          break;
        } // end if
        else if (word.length < wordLength) {
          tieBreaker = []; //clar tieBreaker array
          tieBreaker.push(word);
          wordLength = word.length;
        } //end else if
      } //end bestWords loop
      winningWord = tieBreaker;
    }
    else {
      winningWord = bestWords;
      
    } //end of bestWords > 1

    //Assign Hash Value
    winner["word"] = winningWord[0];
    winner["score"] = highestScore;
    return winner;
    }//end highestScore function
  }// end adagrams

// Do not remove this line or your tests will break!
export default Adagrams;


// Adagrams.usesAvailableLetters('test', Adagrams.drawLetters());

//citing my code sources (besides my Ruby Adagrams code):
// 1. For transforming hash into array: https://stackoverflow.com/questions/23237610/javascript-add-same-element-n-times-in-an-array
//2. lodash _.sampleSize: https://lodash.com/docs/4.17.15 
//3. Chris was used as a reference for learning how to get lodash to work w/jest :)
//4. creating duplicate array (number 10-Array.from): https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/ 
//5.Removing value from array: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
//6.switch statements were several cases equal same value: https://www.tutorialsteacher.com/javascript/javascript-switch#:~:text=The%20switch%20can%20includes%20multiple,default%20case%20will%20be%20executed.