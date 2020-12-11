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

    for (letter in word) {
      // console.log(word[letter]);
      switch(word[letter]) { 
        case 'A': 
        case 'E':
        case 'I': 
        case 'O': 
        case 'U': 
        case 'L': 
        case 'N': 
        case 'R': 
        case 'S': 
        case 'T':
          score += 1;
          console.log(score, word[letter])
        case 'D':
        case 'G':
          score += 2;
        case 'B':
        case 'C':
        case 'M':
        case 'P':  
          score += 3;
          console.log(score, word[letter])
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          score += 4;
        case 'K':
          score += 5;
        case 'J':
        case 'X':
          score += 8;
        case 'Q':
        case 'Z':
          score += 10;      
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

};

// MANUAL TESTING
console.log(Adagrams.drawLetters());
Adagrams.usesAvailableLetters('GOOD', 'DOGXXXXXXX')
Adagrams.usesAvailableLetters('DOG', 'DOXXXXXXXX')
console.log(Adagrams.scoreWord('cat'))

// Do not remove this line or your tests will break!
// export default Adagrams;
