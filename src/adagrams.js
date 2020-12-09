const Adagrams = {
  
  drawLetters() {
    // hash to store frequencies of letters (values) and weights (keys)
    // probably could have just made one big array, but this felt more readable? 
    const letterFreq = {1: ['J', 'K', 'Q', 'X', 'Z'], 
                        2: ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'], 
                        3: ['G'], 
                        4: ['D', 'L', 'S', 'U'],
                        6: ['N', 'R', 'T'], 
                        8: ['O'],
                        9: ['A', 'I'],
                        12: ['E']};
    
    // create array with "weighted" letters
    let letArray = [];

    // for each key/value pair
    for(const [key, value] of Object.entries(letterFreq)){
      // shovel array to letArray with key times of each letter. 
      value.forEach(letter => letArray = letArray.concat(Array(Number(key)).fill(letter)));
    }
    
    // delete random elements from letArray until only 10 left
    while( letArray.length > 10) 
    {
      let deleteIndex = Math.floor(Math.random() * letArray.length);
      letArray.splice(deleteIndex, 1);
    }

    return letArray;
  },
};

Adagrams.drawLetters;
// Do not remove this line or your tests will break!
export default Adagrams;
