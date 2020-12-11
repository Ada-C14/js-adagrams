import _ from "underscore"

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
    //boolean

    const inHandHash = lettersInHand.forEach(function (letter, key) {
      typeof letter[key] === 'undefined' ? letter[key] = 1 : letter[key]++;
    });

    const inputHash = input.forEach(function (letter, key) {
      typeof letter[key] === 'undefined' ? letter[key] = 1 : letter[key]++;
    });
    const input_letters = input.split("")

    if (input_letters.length > 10) {return false};

    if (input_letters === _.uniq(input_letters)) {
      _.isEmpty(_.difference(drawnHand, input_letters))
    };

//compare the two hashmaps
// if inHandHash doesn't have all the keys that inputHash does -- false
// if inHandHash doesn't have the same or more values per key -- false

  },

  scoreWord() {

  },

};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.drawLetters())
// console.log(_.intersection([A, B, C], [B, A]))
// console.log(_.intersection([A, B, B, C], [B, B]))
// console.log(_.difference([A, B, C], [B, A]))
// console.log(_.diff([A, B, B, C], [B, B]))