const pool = {
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
  'Z': 1,
};
const Adagrams = {
  drawLetters() {
    let allLetters = [];
    const newPool = JSON.parse(JSON.stringify(pool));

    for (const [key, value] of Object.entries(newPool)){
      allLetters.push(new Array(value).fill(key));
    }
    allLetters = allLetters.flat();

    const playersLetters = [];
    for (let i = 0; i < 10; i += 1){
      const letter = allLetters[Math.floor(Math.random() * allLetters.length)];
      playersLetters.push(letter);
      allLetters.splice(allLetters.indexOf(letter), 1);
    }
    return playersLetters;
  },
  usesAvailableLetters(input, lettersInHand){
    if (input.length > lettersInHand.length){
      return false;
    }
    for (const char of input){
      if (!lettersInHand.includes(char)) {
        // console.log(char)
        return false;
      }
      lettersInHand.splice(lettersInHand.indexOf(char), 1);
    }
    return true;
  },
  scoreWord(word) {
    let score = 0;
    for (const char of word){
      if (char.match(/[AEIOULNRST]/ig)) {
        score += 1;
      } else if (char.match(/[DG]/ig)) {
        score += 2;
      } else if (char.match(/[BCMP]/ig)) {
        score += 3;
      } else if (char.match(/[FHVWY]/ig)) {
        score += 4;
      } else if (char.match(/[K]/i)) {
        score += 5;
      } else if (char.match(/[JX]/ig)) {
        score += 8;
      } else if (char.match(/[QZ]/ig)) {
        score += 10;
      }
    }
    if ([7, 8, 9, 10].includes(word.length)){
      score += 8
    }
    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
