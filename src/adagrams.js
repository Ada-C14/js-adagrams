const Adagrams = {

  drawLetters() {
    const letters = {
      "A" : 9,
      "B" : 2,
      "C" : 2,
      "D" : 4,
      "E" : 12,
      "F" : 2,
      "G" : 3,
      "H" : 2,
      "I" : 9,
      "J" : 1,
      "K" : 1,
      "L" : 4,
      "M" : 2,
      "N" : 6,
      "O" : 8,
      "P" : 2,
      "Q" : 1,
      "R" : 6,
      "S" : 4,
      "T" : 6,
      "U" : 4,
      "V" : 2,
      "W" : 2,
      "X" : 1,
      "Y" : 2,
      "Z" : 1
    }

    let pool_of_letters = [];
    for(let letter in letters) {
      const letterCount = letters[letter];
      for(let i = 0; i < letterCount; i++){
        pool_of_letters.push(letter);
      }
    }
    const letters_in_hand = []
    for (let i = 0; i < 10; i++){
      let letter_index = Math.round(Math.random() * (pool_of_letters.length-1));
      letters_in_hand.push(pool_of_letters[letter_index]);
      pool_of_letters.splice(letter_index, 1);
    }
    return letters_in_hand;
    
  },

  usesAvailableLetters(input, lettersInHand){
    let object = new Object();
    for (let letter of lettersInHand) {
      if (object[letter]) {
          object[letter] += 1;
        } else {
          object[letter] = 1;
        }
      }
      const input_array = input.split('');
      console.log(input_array);

      for (let letter of input_array) {
        if (object[letter] > 0) {
          object[letter] -= 1;
        } else {
        return false;
        }
      }
      return true;
   } 
};

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
