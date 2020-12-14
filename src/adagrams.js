const letterPool = [
  new Array(9, 'A'),
  new Array(2, 'B'),
  new Array(2, 'C'),
  new Array(4, 'D'),
  new Array(12, 'E'),
  new Array(2, 'F'),
  new Array(3, 'G'),
  new Array(2, 'H'),
  new Array(9, 'I'),
  new Array(1, 'J'),
  new Array(1, 'K'),
  new Array(4, 'L'),
  new Array(2, 'M'),
  new Array(6, 'N'),
  new Array(8, 'O'),
  new Array(2, 'P'),
  new Array(1, 'Q'),
  new Array(6, 'R'),
  new Array(4, 'S'),
  new Array(6, 'T'),
  new Array(4, 'U'),
  new Array(2, 'V'),
  new Array(2, 'W'),
  new Array(1, 'X'),
  new Array(2, 'Y'),
  new Array(1, 'Z'),
]

const createPool = (letterPool) => {
  const letterPoolToDrawFrom = [];
  letterPool.forEach((letters) => {
    letters.forEach((letter) => {
      letterPoolToDrawFrom.push(letter)
    });
  });
  return letterPoolToDrawFrom
  };

const Adagrams = {
  drawLetters() {
    letterPoolToDrawFrom = createPool(letterPool).
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
