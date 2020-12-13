const Adagrams = {

  drawLetters() {
    const letters = {
      "A" : 9,
      "B" : 2,
      "C" : 2,
      "D" : 4,
      "E" : 12,
      "F" : 2,
      "G" : 3,
      "H" : 2,
      "I" : 9,
      "J" : 1,
      "K" : 1,
      "L" : 4,
      "M" : 2,
      "N" : 6,
      "O" : 8,
      "P" : 2,
      "Q" : 1,
      "R" : 6,
      "S" : 4,
      "T" : 6,
      "U" : 4,
      "V" : 2,
      "W" : 2,
      "X" : 1,
      "Y" : 2,
      "Z" : 1
    }

    let pool_of_letters = [];
    for(let letter in letters) {
      const letterCount = letters[letter];
      for(let i = 0; i < letterCount; i++){
        pool_of_letters.push(letter);
      }
    }
    const letters_in_hand = []
    for (let i = 0; i < 10; i++){
      let letter_index = Math.round(Math.random() * (pool_of_letters.length-1));
      letters_in_hand.push(pool_of_letters[letter_index]);
      pool_of_letters.splice(letter_index, 1);
    }
    return letters_in_hand;
    
  },

  usesAvailableLetters(input, lettersInHand){
    let object = new Object();
    for (let letter of lettersInHand) {
      if (object[letter]) {
          object[letter] += 1;
        } else {
          object[letter] = 1;
        }
      }
      const input_array = input.split('');

      for (let letter of input_array) {
        if (object[letter] > 0) {
          object[letter] -= 1;
        } else {
        return false;
        }
      }
      return true;
  },
  
  scoreWord(word) {
    const scores = {
      "A" : 1,
      "B" : 3,
      "C" : 3,
      "D" : 2,
      "E" : 1,
      "F" : 4,
      "G" : 2,
      "H" : 4,
      "I" : 1,
      "J" : 1,
      "K" : 8,
      "L" : 1,
      "M" : 3,
      "N" : 1,
      "O" : 1,
      "P" : 3,
      "Q" : 10,
      "R" : 1,
      "S" : 1,
      "T" : 1,
      "U" : 1,
      "V" : 4,
      "W" : 4,
      "X" : 8,
      "Y" : 4,
      "Z" : 10
    }
   
    let word_array = word.toUpperCase().split('');
    let sum = 0;

    if (word_array.length >= 7) {
      sum += 8;
    }

    for(let letter of word_array) {
      if (scores[letter]) {
        sum += scores[letter];
      }
    }
    return sum;
  },

  highestScoreFrom(words) {
    let winner = new Object();
    let scores = new Object();
    //create an object where word from words will be a key and value is a score
      // to do so I iterate through the words, call a function scoreWord on each, than put word and score pair in the object
    for (let word of words) {
      scores[word] = this.scoreWord(word);
    }
    // find maximum between values 
    let max = 0;
    for (let word in scores) {
      if (scores[word] > max) {
        max = scores[word];
      }
    }

    //create an array of words with tie scores
    const ties_array = [];
    for (let word in scores) {
      if (scores[word] === max) {
        ties_array.push(word);
      }
    }
    // if array of ties contains 1 element, than return it
    if (ties_array.length == 1) {
      return {"score": max, "word": ties_array[0]};
    }

    // in array if ties looking for a word that is 10 characters long, return if found;
    // if there is no 10-characters long word, find he shortest word and return it.
    let shortest = ties_array[0];
    for (let word of ties_array) {
      if (word.length === 10) {
        return {"score": max, "word": word} 
      }
      if (word.length < shortest.length) {
        shortest = word;
      }
    }

    return {"score": max, "word": shortest};
  }
};

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
