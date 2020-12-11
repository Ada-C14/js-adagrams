
const lettersCount = {"A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S": 4, "T": 6, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1};


const Adagrams = {

  drawLetters() {
    // Implement this method for wave 1
    let total_letters = [];

    for (const letter in lettersCount) {
      for (i = 0; i < lettersCount[letter]; i++) {
        total_letters.push(letter);
      };  
    };

    return console.log(this.sampleSize(total_letters, 10));
  }, 
  // Fisher–Yates shuffle
  sampleSize(array, hand) {
    let max = array.length;
    while (max > 0) {
      const i = Math.floor(Math.random() * max--);
      [array[max], array[i]] = [array[i], array[max]];
    };
    // I'm confused about why an index is needed for .slice and how to use it
    return array.slice(0, hand);
  }
};

Adagrams.drawLetters();
// Do not remove this line or your tests will break!
// export default Adagrams;
