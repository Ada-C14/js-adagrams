const Adagrams = {
  drawLetters() {
    const letterFreqs = {
      A : 9,
      B : 2,
      C : 2,
      D : 4,
      E : 12,
      F : 2,
      G : 3, 
      H : 2, 	
      I : 9, 	
      J : 1, 	
      K : 1, 	
      L : 4, 	
      M : 2, 
      N : 6, 
	    O : 8, 
	    P : 2, 
	    Q : 1, 
	    R : 6, 
 	    S : 4, 
      T : 6, 
      U : 4,
      V : 2, 
      W : 2,
      X : 1,
      Y : 2, 
      Z : 1
    };
    const letters = Object.keys(letterFreqs);
    const hand = [];
    while(hand.length < 10){
      const randLetter = letters[Math.floor(Math.random() * letters.length)];
      if(letterFreqs[randLetter] > 0){
        letterFreqs[randLetter] -= 1;
        hand.push(randLetter);
      } 
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const letterCount = {};

    //refactor as forEach?
    for(const letter of lettersInHand){
      if(letterCount[letter]){
        letterCount[letter] += 1;
      }
      else{
        letterCount[letter] = 1;
      }
    }
    
    
    for(const letter of input){
      if(letterCount[letter] === 0 || letterCount[letter] === undefined){
        return false;
      }
      else{
        letterCount[letter] -= 1;
      }
    }

    return true; 
  },

  scoreWord(word){
    let score = 0;
    const letterScores = {};

    ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].forEach(letter => {letterScores[letter] = 1});
    ['D', 'G'].forEach(letter => {letterScores[letter] = 2});
    ['B', 'C', 'M', 'P'].forEach(letter => {letterScores[letter] = 3});
    ['F', 'H', 'V', 'W', 'Y'].forEach(letter => {letterScores[letter] = 4});
    letterScores['K'] = 5;
    ['J', 'X'].forEach(letter => {letterScores[letter] = 8});
    ['Q', 'Z'].forEach(letter => {letterScores[letter] = 10});

    if(word.length >= 7){
      score += 8;
    }

    word.toUpperCase().split('').forEach(letter => score += letterScores[letter]);

    return score; 
  }, 

  highestScoreFrom(words){
    const wordScores = {};
    words.forEach(word => {
      wordScores[word] = this.scoreWord(word);
    });

    const max_score = Math.max(...Object.values(wordScores));
    
    let ties = []; 
    for(const word in wordScores){
      if(wordScores[word] === max_score){
        ties.push(word);
      } 
    }

    let win_word = ties[0];
  

    for(const word of ties){
      if(word.length === 10){
        return {word: word, score: max_score}
      }
      else if(word.length < win_word.length){
        win_word = word; 
      }
    }

    
    return {word: win_word, score: max_score}

  }
};


// Do not remove this line or your tests will break!
export default Adagrams;
