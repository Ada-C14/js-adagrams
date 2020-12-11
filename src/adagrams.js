const lettersDistribution = {
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

const scoreChart = { 
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}


let lettersArray = [];

for (let letter in lettersDistribution) {
  for (let i = 0; i < lettersDistribution[letter]; i++) {
    lettersArray.push(letter);
  }
}

// shuffle from: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const Adagrams = {
  // wave 1
  drawLetters() {
    shuffle(lettersArray);
    return lettersArray.slice(0, 10);
  },
  // wave 2
  usesAvailableLetters(word, drawn) {
   const wordDrawnDiff = drawn.length - word.length
  
    for (let char in word) {
      for (let i = 0; i < drawn.length; i++) {
        if (word[char] === drawn[i]) {
          drawn.splice(drawn[i], 1);
          break;
        }
      } 
    }
    if ((drawn.length - wordDrawnDiff) === 0) {
      return true;
    }
    return false;
  },
  // wave 3
  scoreWord(word) {
    let score = 0;
    for (let i = 0; i < Object.values(scoreChart).length; i++) {
      for (let j = 0; j < word.length; j++) {
        if (Object.values(scoreChart)[i].includes(word[j])) {
          score += parseFloat(Object.keys(scoreChart)[i]);
        }
      }
    }
    console.log(score)
  }
};

console.log(Object.values(scoreChart)[0][0])
console.log(Object.values(scoreChart)[0].length)
console.log(Adagrams.scoreWord('DOGZ'))



// Do not remove this line or your tests will break!
//export default Adagrams;
