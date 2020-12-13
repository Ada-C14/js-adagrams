const Adagrams = {
  drawLetters() {
    /////////// WAVE ONE ///////////
    const drawPool = {
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

    const lettersInHand = [];

    // Psuedocode
    // 10 times do:
    // pull a letter from the pool, subtract it from the count
    // put it in the array of the person's hand
    // (if you draw the only Z, you can't draw it again)

    let i = 0;
    while (i < 10) { 
      const random = Object.keys(drawPool)[Math.floor(Math.random()*Object.keys(drawPool).length)] // selects a random key from drawPool: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
      drawPool[random] -= 1;
      lettersInHand.push(random);
        i += 1;
    }

    return lettersInHand;
  },

  /////////// WAVE TWO ///////////
  
  usesAvailableLetters(input, lettersInHand) {

    // Psuedocode
    // make a hashmap of input
    // make a hashmap of lettersInHand
    // check if each value in input's hashmap exists in letters's -- input's quantity must less than letters's (return false for any fails)
    // otherwise return true

    let inputHashTable = {};
    let lettersInHandHashTable = {};

    for (const letter in input) {
      if (inputHashTable[input[letter]]) {
        inputHashTable[input[letter]] += 1;
      } else {
        inputHashTable[input[letter]] = 1;
      }
    }

    for (const letter in lettersInHand) {
      if (lettersInHandHashTable[lettersInHand[letter]]) {
        lettersInHandHashTable[lettersInHand[letter]] += 1;
      } else {
        lettersInHandHashTable[lettersInHand[letter]] = 1;
      }
    }

    // console.log(inputHashTable)
    // console.log(lettersInHandHashTable)

    for (const letter in inputHashTable) {
      // console.log(lettersInHandHashTable[[letter]])
      // console.log(inputHashTable[letter])
      if (!lettersInHandHashTable[[letter]]) {
        // console.log(`false`)
        return false;
      } else if (lettersInHandHashTable[[letter]] < inputHashTable[letter] ) {
        // console.log(`false`)
        return false;
      }  
    }

    // console.log(`true`)
    return true;

  },

  /////////// WAVE THREE ///////////

  scoreWord(word) {

    let score = 0
    word = word.toUpperCase();
    const scorePool = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 4,
      'G': 2,
      'H': 4,
      'I': 1,
      'J': 8,
      'K': 5,
      'L': 1,
      'M': 3,
      'N': 1,
      'O': 1,
      'P': 3,
      'Q': 10,
      'R': 1,
      'S': 1,
      'T': 1,
      'U': 1,
      'V': 4,
      'W': 4,
      'X': 8,
      'Y': 4,
      'Z': 10
    }

    for (const letter in word) {
      // console.log(letter); // refers to index
      // console.log(word[letter]); // refers to letter
      // console.log(word[letter]);

      // find key in scorePool that matches
      if (word[letter] in scorePool) {
        score += scorePool[word[letter]]
        // console.log(score)
        // console.log(`found letter`)
        // console.log(scorePool[word[letter]])
        // console.log(scorePool[letter])
        // score += scorePool[word[letter]]
      }
    }

    if (word.length >= 7) {
      score += 8
    }

    return score;

    // Psuedocode
    // word is a string of characters
    // returns an integer representing sum of words' letters' points
    // bonus: words 7-10 chars long +8 pts

  },

  highestScoreFrom(words) {

    // gather all the words/scores in a hash

    const scoresHash = {};

    for (const word in words) {
      if (scoresHash[words[word]]) {
        scoresHash[words[word]] = this.scoreWord(words[word]);
      } else {
        scoresHash[words[word]] = this.scoreWord(words[word]);
      }  
    }

    // find the highest score
    const highestScore = Math.max(...Object.values(scoresHash));

    // gather all the words with the highest score
    let winningWords = [];
    
    Object.keys(scoresHash).map(function(word) { if (scoresHash[word] === highestScore) { winningWords.push(word) } });

    // sort the words by length

    winningWords.sort(function(a, b) { 
      // MDN made it look like .sort() would default sort strings by length, but it did not in the tests, so made custom sort
      // modified custom sort from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      const nameA = a.length; 
      const nameB = b.length;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      return 0; 
    });

    // make a hash for the function return

    let bestScoreHash = {};

    // add the word to the hash based on tiebreaker rules

    if (winningWords[winningWords.length-1].length === 10) {
      bestScoreHash = {
        word: winningWords[winningWords.length-1],
        score: highestScore
      }
    } else { // STILL TODO: selects the first word when both have same length
      bestScoreHash = {
        word: winningWords[0],
        score: highestScore
      }
    }

    return bestScoreHash;

  }

};

// MANUAL TESTING
// console.log(Adagrams.drawLetters());
// Adagrams.usesAvailableLetters('GOOD', 'DOGXXXXXXX')
// Adagrams.usesAvailableLetters('DOG', 'DOXXXXXXXX')
// console.log(Adagrams.scoreWord('cat'))
// console.log(Adagrams.scoreWord('zippers'))
// console.log(Adagrams.highestScoreFrom(['DOG', 'BANANT', 'BANANA']))
// console.log(Adagrams.highestScoreFrom(['AAAAAAAAAA', 'BBBBBB']))
// Do not remove this line or your tests will break!
export default Adagrams;
