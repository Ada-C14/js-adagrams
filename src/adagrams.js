const Adagrams = {
  lettersDistribution: [
    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'B', 'B',
    'C', 'C',
    'D', 'D', 'D', 'D',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'F', 'F',
    'G', 'G', 'G',
    'H', 'H',
    'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'J',
    'K',
    'L', 'L', 'L', 'L',
    'M', 'M',
    'N', 'N', 'N', 'N', 'N', 'N',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
    'P', 'P',
    'Q',
    'R', 'R', 'R', 'R', 'R', 'R',
    'S', 'S', 'S', 'S',
    'T', 'T', 'T', 'T', 'T', 'T',
    'U', 'U', 'U', 'U',
    'V', 'V',
    'W', 'W',
    'X',
    'Y', 'Y',
    'Z'
  ],

  drawLetters() {
    // shuffle array using Fisher-Yates Algorithm
    for (let i = this.lettersDistribution.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = this.lettersDistribution[i]
      this.lettersDistribution[i] = this.lettersDistribution[j]
      this.lettersDistribution[j] = temp
    }

    // pick top ten from shuffled
    return this.lettersDistribution.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputLetters = input.split('');

    let usesAvailableLetters = true;
    inputLetters.forEach(letter => {
      const matchLetter = lettersInHand.findIndex(handLetter => handLetter == letter);

      if (matchLetter === -1) {
        usesAvailableLetters = false;
      }

      lettersInHand.splice(matchLetter, 1);
    });

    return usesAvailableLetters;
  },

  scoreWord(word) {
    const wordByLetter = word.toUpperCase().split('');

    let score = 0;


    if (word.length >= 7){
      score += 8;
    }

    wordByLetter.forEach(letter => {
      switch (letter) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T': {
          score += 1;
          break;
        }

        case 'D':
        case 'G': {
          score += 2;
          break;
        }

        case 'B':
        case 'C':
        case 'M':
        case 'P': {
          score += 3;
          break;
        }

        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y': {
          score += 4;
          break;
        }

        case 'K': {
          score += 5;
          break;
        }

        case 'J':
        case 'X': {
          score += 8;
          break;
        }

        case 'Q':
        case 'Z': {
          score += 10;
          break;
        }

        default:
          console.log(`${letter} is not supported.`);
          return;
      }

    });


    
    return score;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
