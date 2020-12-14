const Adagrams = {
  lettersDistribution: [
    "A", "A", "A", "A", "A", "A", "A", "A", "A",
    "B", "B", 
    "C", "C", 
    "D", "D", "D", "D",
    "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
    "F", "F",
    "G", "G", "G",
    "H", "H",
    "I", "I", "I", "I", "I", "I", "I", "I", "I",
    "J",
    "K",
    "L", "L", "L", "L",
    "M", "M",
    "N", "N", "N", "N", "N", "N",
    "O", "O", "O", "O", "O", "O", "O", "O",
    "P", "P",
    "Q", 
    "R", "R", "R", "R", "R", "R",
    "S", "S", "S", "S", 
    "T", "T", "T", "T", "T", "T",
    "U", "U", "U", "U",
    "V", "V", 
    "W", "W",
    "X", 
    "Y", "Y", 
    "Z" 
    ],

  drawLetters: function() {
    // shuffle array
    for(let i = this.lettersDistribution.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = this.lettersDistribution[i]
      this.lettersDistribution[i] = this.lettersDistribution[j]
      this.lettersDistribution[j] = temp
    }

    // pick top ten from shuffled
    return this.lettersDistribution.slice(0, 10);
  },

  usesAvailableLetters: function() {

  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
