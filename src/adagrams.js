const letterPool = {
  alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  quantities: [9,2,2,4,12,2,3,2,9,1,1,4,2,6,8,2,1,6,4,6,4,2,2,1,2,1],
  build () {
    let letterPool = [];

    const fillLetterPool = () => {
      for (const index in this.alphabet) {
        for (let i=0; i < this.quantities[index]; i++) {
          letterPool.push(this.alphabet[index]);
      }}
    return letterPool;
    };

    fillLetterPool();

    return letterPool;
  },
}

const Adagrams = {
  drawLetters() {
    let letters = letterPool.build();
    let hand = [];
    
    for (let i=0; i < 10; i++) {
      hand.push(letters[Math.floor(Math.random() * letters.length)]); 
    }

    return hand;
    },
    usesAvailableLetters(input, lettersInHand) {
      let operatingHand = lettersInHand.map((x) => x);
      
      for (let i = 0; i < input.length; i++) {
        if (operatingHand.includes(input[i])) {
          const index = operatingHand.indexOf(input[i]);
          operatingHand.splice(index,1);
        } else {
          return false;
        }
      }
      
      return true
    },
    scoreWord(word) {
      let wordCap = word.toUpperCase();
      let score = 0;

      if (word.length > 6) {
        score += 8 ;
      }
    
      for (let i=0; i < wordCap.length; i++) {
        if (['A','E','I','O','U','L','N','R','S','T'].includes(wordCap[i])) {
          score++ ;
        } else if (['D','G'].includes(wordCap[i])) {
          score += 2 ;
        } else if (['B','C','M','P'].includes(wordCap[i])) {
          score += 3 ;
        } else if (['F', 'H', 'V', 'W', 'Y'].includes(wordCap[i])) {
          score += 4 ;
        } else if (wordCap[i] == 'K') {
          score += 5 ;
        } else if (wordCap[i] == 'J' || wordCap[i] == 'X') {
          score += 8 ;
        } else if (wordCap[i] == 'Q' || wordCap[i] == 'Z') {
          score += 10 ;
        }
      }
      return score;
    },
    highestScoreFrom(words) {
      let scoresOnly = words.map(word => this.scoreWord(word));
      let highScore = Math.max.apply(null, scoresOnly);

      let tiedWords = [];
      let winner = [];

      words.forEach(word => {
        if (this.scoreWord(word) == highScore) {
        tiedWords.push({"word": word, "score": this.scoreWord(word)});
      }
      });

      if (tiedWords.length == 1) {
        winner.push(tiedWords[0]);
      }

      let lengthsOnly = [];
      
      for (let i=0; i < tiedWords.length; i++) {
        lengthsOnly.push(tiedWords[i]['word'].length);
      }
      
      let lengthToFind;

      if (lengthsOnly.includes(10)) {
        lengthToFind = 10;
      } else {
        lengthToFind = Math.min.apply(null, lengthsOnly);
      }

      for (let i = 0; i < tiedWords.length; i++) {
        if (tiedWords[i]['word'].length == lengthToFind) {
          winner.push(tiedWords[i]);
        }
      }

      return winner[0];
    }
}


// console.log(Adagrams.drawLetters());
// console.log(Adagrams.drawLetters().length);

// console.log(Adagrams.usesAvailableLetters("DOG", ['G','O', 'O', 'D', 'N', 'E', 'S', 'S']));
// console.log(Adagrams.scoreWord('dOg'));
// console.log(Adagrams.scoreWord('dOgdogDOG'));

// console.log(Adagrams.highestScoreFrom(['dog', 'cat', 'a']));

// Do not remove this line or your tests will break!
 export default Adagrams;