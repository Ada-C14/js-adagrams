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
    // key/values pairs of letters to score score
    const scoreHash = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
                        D: 2, G: 2,
                        B: 3, C: 3, M: 3, P: 3,
                        F: 4, H: 4, V: 4, W: 4, Y: 4,
                        K: 5,
                        J: 8, X: 8,
                        Q: 10, Z: 10}

    // starting score 8 pts if word is at least 7 letters long
    let score = word.length > 6 ? 8 : 0;

    // iterate through each letter of word
    for(const letter of word) {
      score += scoreHash[letter.toUpperCase()];
    }

    return score; 
  },

  highestScoreFrom(words) {
    let maxWord = {word: '', score: 0}; // eventually will store max word

    // iterate through each word
    for (const word of words) {
      let score = Adagrams.scoreWord(word);

      // check for new max
      if (score > maxWord.score) {
        maxWord.word = word;
        maxWord.score = score;

      // check if scores are same  
      } else if (score === maxWord.score) {

        // if maxWord is already length 10, don't replace it 
        // otherwise, replace only if current word has fewer or 10 letters
        if(maxWord.word.length < 10 && (word.length === 10 || word.length < maxWord.word.length)) {
          maxWord.word = word;
          maxWord.score = score;
        }
      }
    }

    return maxWord;
  }
};

Adagrams.drawLetters;
// Do not remove this line or your tests will break!
export default Adagrams;
