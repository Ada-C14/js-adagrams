const Adagrams = {
  
  drawLetters() {
    // hash to store frequencies of letters
    const letterFreq = {1: ['J', 'K', 'Q', 'X', 'Z'], 
                        2: ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'], 
                        3: ['G'], 
                        4: ['D', 'L', 'S', 'U'],
                        6: ['N', 'R', 'T'], 
                        8: ['O'],
                        9: ['A', 'I'],
                        12: ['E']};

    let letArray = [];
    for(const [key, value] of Object.entries(letterFreq)){
      console.log(Array(Number(key)).fill(0));
      value.forEach(letter => letArray = letArray.concat(Array(Number(key)).fill(letter)));
    }

    console.log(letArray)
  },
};

Adagrams.drawLetters;
// Do not remove this line or your tests will break!
export default Adagrams;
