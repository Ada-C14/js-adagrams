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

    // for (let i = 0; i < 10; i++) {
    //   drawnHand.push(letterPool[Math.floor(Math.random() * letterPool.length)]);
    // }
    // drawnHand.concat(_.sample(letterPool, 10))
    return drawnHand;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.drawLetters())