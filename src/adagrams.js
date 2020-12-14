const lettersCount = {"A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S": 4, "T": 6, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1};
const lettersScore = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,"K": 5, "J": 8, "X": 8,"Q": 10, "Z": 10};

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    let total_letters = [];

    for(const letter in lettersCount) {
      for(let i = 0; i < lettersCount[letter]; i++) {
        total_letters.push(letter);
      };
    };
    return this.sampleSize(total_letters, 10);
  },
  
  sampleSize(array, hand) {
    let max = array.length;
    while (max > 0) {
      const i = Math.floor(Math.random() * max--);
      [array[max], array[i]] = [array[i], array[max]];
    };

    return array.slice(0, hand);
  },

  usesAvailableLetters(input, lettersInHand) {

    input = input.split('');
    let tally = {};

    for(const letter of lettersInHand) {
      if (tally[letter]) {
        tally[letter] += 1;
      } else {
        tally[letter] = 1;
      };
    };

    for(const letter of input) {
      if (tally[letter] && tally[letter] > 0) {
        tally[letter] -= 1;
      } else {
        return false;
      };
    };
    return true;
  },


  scoreWord(word) {
    let sum = 0;
    word = word.toUpperCase().split('')
    
    if (word.length > 6) {sum += 8};

    for(const letter of word) {
      sum += lettersScore[letter];
    };

    return sum;
  },

  highestScoreFrom(words) {
    let word_scores = [];
    let max_score = 0;
    let best_word = {};
    let high_score = [];

    words.forEach(word => {
      word_scores.push({word: word, score: this.scoreWord(word)});
    });

    for(let i = 0; i < word_scores.length; i++) {
      if(word_scores[i].score > max_score) {
        max_score = word_scores[i].score;
      };
    };

    for(let i = 0; i < word_scores.length; i++) {
      if(word_scores[i].score === max_score) {
        high_score.push(word_scores[i]);
      };
    };

    if(high_score.length > 1) {
      best_word = this.tieBreaker(high_score);
    } else {
      best_word = high_score[0];
    };
    return best_word;
  },

  tieBreaker(high_score) {
    let min_length = 10;

    for(const word of high_score) {
      if(word.word.length === min_length) {
        return word;
      };
    };

    for(const word of high_score) {
      if(word.word.length < min_length) {
        min_length = word.word.length;
      };
    };

    for(const word of high_score) {
      if(word.word.length === min_length) {
        return word;
      };
    };
  },


};

// Do not remove this line or your tests will break!
export default Adagrams;
