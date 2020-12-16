const alpha = [
  "A", "A", "A", "A", "A", "A", "A", "A", "A",
  "B", "B",
  "C", "C",
  "D", "D", "D", "D",
  "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
  "F", "F",
  "G", "G", "G",
  "H", "H",
  "I", "I", "I", "I", "I", "I", "I", "I", "I",
  "J",
  "K",
  "L", "L", "L", "L",
  "M", "M",
  "N", "N", "N", "N", "N", "N",
  "O", "O", "O", "O", "O", "O", "O", "O",
  "P", "P",
  "Q",
  "R", "R", "R", "R", "R", "R",
  "S", "S", "S", "S",
  "T", "T", "T", "T", "T", "T",
  "U", "U", "U", "U",
  "V", "V",
  "W", "W",
  "X",
  "Y", "Y",
  "Z"
];

const Adagrams = {
  drawLetters() {

    const newAlpha = [];

    for (let i = 0; i < 10; i++) {
      const idx = Math.floor(Math.random() * alpha.length);
      newAlpha.push(alpha[idx]);
      alpha.splice(idx, 1);
    }
    return newAlpha;
  },

  usesAvailableLetters(input, lettersInHand) {

    for (let i = 0; i < input.length; i += 1) {
      const character = input[i]
      const letterIndex = lettersInHand.indexOf(character)
      if (letterIndex === -1) {
        return false
      }
      lettersInHand.splice(letterIndex, 1)
    }
    return true
  },


  scoreWord(word) {
    let score = 0;

    for (let i = 0; i < word.length; i += 1) {
      switch (word[i].toUpperCase()) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        case "L":
        case "N":
        case "R":
        case "S":
        case "T":
          score += 1;
          break;
        case "D":
        case "G":
          score += 2;
          break;
        case "B":
        case "C":
        case "M":
        case "P":
          score += 3;
          break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
          score += 4;
          break;
        case "K":
          score += 5;
          break;
        case "J":
        case "X":
          score += 8;
          break;
        case "Q":
        case "Z":
          score += 10;
          break;
      }
    }
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }
    return score;
  },


  // highestScoreFrom(words) {
  //   let highestScore = 0;
  //   let highestScoreLength = 0;
  //   let highestWord = null;

  //   for (let i = 0; i < words.length; i += 1) {
  //     let word = words[i];
  //     let score = scoreWord(word);


  //     if (highestScore < score) {
  //       highestScore == score;
  //       highestWord = word;
  //       highestScoreLength == word.length;
  //     } else if (highest_score == score && highest_score_length != 10) {
  //       if (word.length == 10) {
  //         highestScoreLength = word.length;
  //         highestWord = word;
  //       }

  //     } else if (word.length < HighestWord.length) {
  //       highestScoreLength == word;
  //       highest_word = word;

  //     }

  //     highestScoreObject = {
  //       word: highestWord,
  //       score: highestScore
  //     }
  //   }
  // }
}


// Do not remove this line or your tests will break!
export default Adagrams;

