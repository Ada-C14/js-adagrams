const letterQuantities = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
};


const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    
    // added the appropriate number of each letter in an array
    let lettersArray = [];

    for (const [key, value] of Object.entries(letterQuantities)) {
      for(let i = 0; i < value; i++) {
        lettersArray.push(key);
      } 
    };

    // shuffles the letters array
    for (let i = lettersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = lettersArray[i];
      lettersArray[i] = lettersArray[j];
      lettersArray[j] = temp;
    }

    // takes the first 10 letters of the array
    return lettersArray.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {

    const hand = {}
    
    // stores the letters as keys and count as the value
    for (const letter of lettersInHand) {
      if (hand[letter]) {
        hand[letter] += 1;
      } else {
        hand[letter] = 1;
      }
    }

    // checks the letters of unput against the hand object
    for (const letter of input) {
      if (!hand[letter] || hand[letter] === 0) {
        return false;
      } else if (hand[letter]) {
        hand[letter] -= 1; // if there is a match, reduce count by one
      }
    }

    return true;

  },




};


// Do not remove this line or your tests will break!
export default Adagrams;
