const Adagrams = {
  letters: {
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
},

// wave 1

allLetters: [],

drawLetters: function() {
  // update allLetters with correct frequencies(repetition) of each letter
  for(let [letter,frequency] of Object.entries(this.letters)){
    for(let i = 0; i < frequency; i++){
      this.allLetters.push(letter);
    } 
  }
  // shuffle all letters
  const randomLetter = this.allLetters.sort(() => Math.random() - 0.5)

  // return first 10 letterrs
  return randomLetter.slice(0,10)
  },

  // wave 2

  // count function
  count: function(array, element){
    let count = 0;
    for(let i = 0; i < array.length; ++i){
      if(array[i] == element){
        count++;
      }
    };
    return count;
  },
  usesAvailableLetters: function(input,lettersInHand){

      input = input.split('');

      for(let letter of input){
        if(this.count(input,letter) > this.count(lettersInHand,letter)){
          return false
        }
      }
      return true
  },
  
  // wave 3
  scoreWord: function(word){
    let points = 0

    if(word.length > 6){
      points += 8
    }

    word = word.toUpperCase();

    for( let letter of word){
      switch(letter){
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
          points += 1;
          break;
        case 'D':
        case 'G':
          points += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          points += 3
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          points += 4;
          break;
        case 'k':
          points += 5;
          break;
        case 'J':
        case 'X':
          points += 8;
          break;
        case 'Q':
        case 'Z':
          points += 10;
          break;
      }
    }
    return points
  },

  // wave 4

  highestScoreFrom: function(words){
    const wordsArrayOfObject = [];
    for (const word of words) {
      wordsArrayOfObject.push({
        word: word,
        length: word.length,
        score: this.scoreWord(word),
        isMaxPoints: false
      });
    }

  
  //let maxWordScore = Math.max.apply(Math, wordsArrayOfObject.map(function(o) { return o.score; }))
    const maxWordScore = Math.max(...wordsArrayOfObject.map(o => o.score)) //spread operator
    const tie = [];

    for (const word of wordsArrayOfObject){
      if(word.score == maxWordScore){
        word.isMaxPoints = true;
        tie.push(word)
      }
    }

    //const minWordLength = Math.min.apply(Math, tie.map(function(o) { return o.length; }))
    const minWordLength = Math.min(...tie.map(o => o.length)) //spread operator


    if(tie.length == 1){
      return {score: tie[0].score, word: tie[0].word};
    }else{
      let winner;
      for(const word of tie){
        if(word.length == 10){
          winner = {score: word.score, word: word.word};
          return winner;

        } else if (word.length < 10) {
          if(word.length == minWordLength){
            winner = {score: word.score, word: word.word};
            }
          }
        }
        return winner;
      }
  }
  
};

// Do not remove this line or your tests will break!
export default Adagrams;
