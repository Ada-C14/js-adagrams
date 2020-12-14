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
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
