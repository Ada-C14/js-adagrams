const letterPool = {
  alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  quantities: [9,2,2,4,12,2,3,2,9,1,1,4,2,6,8,2,1,6,4,6,4,2,2,1,2,1],
  build () {
    let letterPool = [];

    const buildLetters = () => {
      for (const index in this.alphabet) {
        for (let i=0; i < this.quantities[index]; i++) {
          letterPool.push(this.alphabet[index]);
      }}
    return letterPool;
    };

    buildLetters();

    return letterPool;
  },
}

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    // #p letters_pool
    // drawn_letters = letters_pool.sample(10)
    // return drawn_letters
  
    let letters = letterPool.build();
    console.log(letters);
    
    let hand = [];
    
    for (let i=0; i < 10; i++) {
      hand.push(letters[Math.floor(Math.random() * letters.length)]); 
    }
    console.log(hand);
    return hand;
    },
  
};

Adagrams.drawLetters();




// Do not remove this line or your tests will break!
// export default Adagrams;
