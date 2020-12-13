const Adagrams = {
  // wave 1
  drawLetters() {
    // Implement this method for wave 1
    const letterArr = []
    const letterPool = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 }
   
    for (const letter in letterPool) {
      for (let i = 0; i < letterPool[letter]; i++) {
        letterArr.push(letter)
      };
    };
    // console.log(letterArr)
    return this.randomLetter(letterArr)
  },

  // helper function for drawLetters() 
  randomLetter(arr) {
    const randomArr = []
    for (let i = 0; i < 10; i++) {
      const random = arr[Math.floor(Math.random() * arr.length)];
      randomArr.push(random)
    } 
    return randomArr
  },

  // wave 2
  usesAvailableLetters(input, lettersInHand) {
  // clone lettersInHand array
    let lettersInHandClone = [...lettersInHand]
  
    const inputLetterArr = input.toUpperCase().split('');

    let notInHand = false
    inputLetterArr.forEach((letter) => {
      const index = lettersInHandClone.indexOf(letter);
      if(index !== -1) {
        lettersInHandClone.splice(index, 1);
      } else {
        notInHand = true;
      };
    });
    return !notInHand
  },

  // wave 3
  scoreWord(word) {

    const scores = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
    };

    let sum = 0

    let letterArr = word.toUpperCase().split('');

    letterArr.forEach((letter) => {
      for (let value in scores) {
        if (scores[value].includes(letter)) {
          sum += Number(value)
          // console.log(`NUMBER ${Number(value)}`)
        }
      }
    });
    if(word.length >= 7) {
      sum += 8;
    }
    return sum;
  },

  // wave 4 
  highestScoreFrom(words) {
    let result = [];
    let maxScore = 0;

    for (let word of words) {
      if (this.scoreWord(word) > maxScore) {
        maxScore = this.scoreWord(word)
      }
      result.push({'word': word, 'score': this.scoreWord(word)})
    }
  
    const maxScoreObj = result.filter(obj => obj.score == maxScore);
    const tenLettersWords = maxScoreObj.find(obj => obj.word.length === 10);

    if (tenLettersWords) {
      return tenLettersWords
    } else {
      return maxScoreObj.sort((a,b) => a.word.length - b.word.length)[0];
    }
  }

};

// console.log(Adagrams.drawLetters()); 
// Adagrams.scoreWord("ADA")
// console.log(Adagrams.highestScoreFrom("ADA"));
// Adagrams.highestScoreFrom(["MONA", "HI", "BAD"])


// Do not remove this line or your tests will break!
export default Adagrams;
