import _, { findLastIndex } from "underscore"

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterPool = [];
    const addLetters = function (letters, frequency) {
      letters.forEach(function (letter) {
        for (let i = 0; i < frequency; i++) {
          letterPool.push(letter);
        }
      })

    }

    const solo = ['J', 'K', 'Q', 'X', 'Z'];
    const dbl = ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'];
    const quad = ['D', 'L', 'S', 'U'];
    const tuple = ['N', 'R', 'T'];
    const nueve = ['A', 'I'];
    addLetters(solo, 1);
    addLetters(dbl, 2);
    addLetters(['G'], 3);
    addLetters(quad, 4);
    addLetters(tuple, 6);
    addLetters(['O'], 8);
    addLetters(nueve, 9);
    addLetters(['E'], 12);

    const drawnHand = _.sample(letterPool, 10);

    ////Attempting to make sure the count doesn't go over the total amount available
    // const drawnHand = []
    // const draw = () => {
    //   for (let i = 0; i < 10; i++) {
    //     letter = _.sample(letterPool);
    //     drawnHand.push(letter)
    //     letterPool = _.difference(letterPool, letter)
    //   }
    // }
    return drawnHand;
  },

  usesAvailableLetters(input, lettersInHand) {

    const inHandHash = {}
    lettersInHand.forEach( (letter) =>  {
      inHandHash[letter] === 'undefined' ? inHandHash[letter] = 1 : inHandHash[letter]++;
    });

    const inputLetters = input.toUpperCase().split(" ");

    if (inputLetters.length > 10) {return false};

    if (inputLetters === _.uniq(inputLetters)) {
      _.isEmpty(_.difference(lettersInHand, inputLetters))
    };

    let valid = true;
    inputLetters.forEach(checkLetter => {
      if (valid === false) {
        return false;
      }
      else if (inHandHash[checkLetter] < 1){
        valid = false;
      } else if (inHandHash[checkLetter] >= 1) {
        inHandHash[checkLetter] -= 1;
      } else {
        valid = false;
      }
    });
    return valid;


  },

  scoreWord() {

  },

};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.drawLetters())
