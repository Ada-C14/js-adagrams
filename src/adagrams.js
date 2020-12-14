const LETTERHASH = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1
}

const Adagrams = {
  drawLetters() {
  var letters = [];
  
  for (const [key, value] of Object.entries(LETTERHASH)) {
    for (let i = 0; i < value + 1; i += 1) {
      letters.push(key);
    }
  }

  const sampleTen = []
  for (let i = 0; i < 10; i += 1) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    sampleTen.push(randomLetter)
  }
  return sampleTen;

  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandCopy = [...lettersInHand]; // spread operator: shallow copy

    for(let letter of input) { 
      if (lettersInHandCopy.includes(letter)) {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
  return true;  
  },

  scoreWord(word) {
    const wordSplit = word.toLowerCase().split('');
    let score = 0;

    console.log(wordSplit)

    for (let letter of wordSplit) {
      switch(letter) {
        case 'a': case 'e': case 'i': case 'o': case 'u': case 'l': case 'n': case 'r': case 's': case 't':
          score += 1;
          break;
        case 'd': case 'g':
          score += 2;
          break;
        case 'b': case 'c': case 'm': case 'p':
          score += 3;
          break;
        case 'f': case 'h': case 'v': case 'w': case 'y':
          score += 4;
          break;  
        case 'k':
          score += 5;
          break;
        case 'j': case 'x':
          score += 8;
          break;
        case 'q': case 'z':
          score += 10;
          break;    
      }
    }    

    if (wordSplit.length > 6 && wordSplit.length < 11) {
      score += 8;
    }

    return score
  }

};


// def score_word(word)
//   word_split = word.downcase.split("")
//   score = 0
//   word_split.each do |letter|
//     case letter
//     when "a", "e", "i", "o", "u", "l", "n", "r", "s", "t"
//       score += 1
//     when "d", "g"
//       score += 2
//     when "b", "c", "m", "p"
//       score += 3
//     when "f", "h", "v", "w", "y"
//       score += 4
//     when "k"
//       score += 5
//     when "j", "x"
//       score += 8
//     when "q", "z"
//       score += 10
//     end
//   end

//   if word_split.length > 6 && word_split.length < 11
//     score += 8
//   end

//   return score

// end

console.log(Adagrams.scoreWord('kqgda'))

// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
