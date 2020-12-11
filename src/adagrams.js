const Adagrams = {
  drawLetters() {
    // WAVE ONE
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

    const handLettersArray = []

    // Psuedocode
    // 10 times do:
    // pull a letter from the pool, subtract it from the count
    // put it in the array of the person's hand
    // (if you draw the only Z, you can't draw it again)

    let i = 0
    while (i < 10) { 
      const random = Object.keys(drawPool)[Math.floor(Math.random()*Object.keys(drawPool).length)] // selects a random key from drawPool: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
      drawPool[random] -= 1
      handLettersArray.push(random);
        i += 1
    }

    return handLettersArray
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
