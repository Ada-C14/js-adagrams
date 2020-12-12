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
    // Implement this method for wave 1
  
    let letters = letterPool.build();
    // console.log(letters);
    
    let hand = [];
    
    for (let i=0; i < 10; i++) {
      hand.push(letters[Math.floor(Math.random() * letters.length)]); 
    }
    // console.log(hand);
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
    }
};

// console.log(Adagrams.drawLetters());
// console.log(Adagrams.drawLetters().length);

// console.log(Adagrams.usesAvailableLetters("DOG", ['G','O', 'O', 'D', 'N', 'E', 'S', 'S']));



// Do not remove this line or your tests will break!
export default Adagrams;
