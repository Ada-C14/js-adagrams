const Adagrams = {
  
  drawLetters() {
    // hash to store frequencies of letters (values) and weights (keys)
    // probably could have just made one big array, but this felt more readable? 
    const letterFreq = {1: ['J', 'K', 'Q', 'X', 'Z'], 
                        2: ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'], 
                        3: ['G'], 
                        4: ['D', 'L', 'S', 'U'],
                        6: ['N', 'R', 'T'], 
                        8: ['O'],
                        9: ['A', 'I'],
                        12: ['E']};
    
    // create array with "weighted" letters
    let letArray = [];

    // for each key/value pair
    for(const [key, value] of Object.entries(letterFreq)){
      // shovel array to letArray with key times of each letter. 
      value.forEach(letter => letArray = letArray.concat(Array(Number(key)).fill(letter)));
    }
    
    // delete random elements from letArray until only 10 left
    while( letArray.length > 10) 
    {
      let deleteIndex = Math.floor(Math.random() * letArray.length);
      letArray.splice(deleteIndex, 1);
    }

    return letArray;
  },

  usesAvailableLetters(input, lettersInHand) {
    let handCopy = lettersInHand; // make copy of lettersInHand
    
    // iterate for every char in string
    for (let i = 0; i < input.length; i++) {

      // if found in handCopy, delete from handCopy
      // convert input to uppercase assuming lettersInHand has uppercase letters
      if(handCopy.includes(input[i].toUpperCase())) {

        let deleteIndex = lettersInHand.indexOf(input[i].toUpperCase());
        handCopy.splice(deleteIndex, 1);

      } else { // else, not found, therefore returns false

        return false;

      }
    }

    // if leaves loop, all input letters valid
    return true;
  },

  scoreWord(word) {
    // key/values pairs of scores to letters assoc. with score
    const scoreHash = { 1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
                        2: ['D', 'G'],
                        3: ['B', 'C', 'M', 'P'], 
                        4: ['F', 'H', 'V', 'W', 'Y'], 
                        5: ['K'],
                        8: ['J', 'X'],
                        10: ['Q', 'Z'] }
    // starting score 8 pts if word is at least 7 letters long
    let score = word.length > 6 ? 8 : 0;


  },

  highestScoreFrom(words) {

  }
};

Adagrams.drawLetters;
// Do not remove this line or your tests will break!
export default Adagrams;
