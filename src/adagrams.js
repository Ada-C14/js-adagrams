import has from 'lodash/has';
import _ from 'lodash';

    //letters/frequencies object
    const LETTERS = {A : 9, B : 2, C : 2, D : 4, E : 12, F : 2, G : 3, H : 2, I : 9, J : 1, K : 1, L : 4, M : 2, N : 6, O : 8, P : 2, Q : 1, R : 6, S : 4, T : 6, U : 4, V : 2, W : 2, X : 1, Y : 2, Z : 1 };

const Adagrams = {
  drawLetters() {

    //Letters are now being populated for game play! Start with an empty array.
    let letters = [];

    //now populating array with the correct number of letters
    for (let [key] in LETTERS) {
      for(let i = 1; i <= LETTERS[key]; i++) {
        letters.push(key);
      }
    };
    //need to create a 'sample' method to return a sampling of tiles
    const randomTenTiles = _.sampleSize; //_.sampleSize is lodash npm
    const drawn = randomTenTiles(letters, 10);
    return drawn;
  },

  usesAvailableLetters(input, lettersInHand) {
    const drawn_tiles = input;
    let used_tiles = Array.from(drawn_tiles);


  }

};

// Do not remove this line or your tests will break!
export default Adagrams;






//citing my code sources:
// 1. For transforming hash into array: https://stackoverflow.com/questions/23237610/javascript-add-same-element-n-times-in-an-array
//2. lodash _.sampleSize: https://lodash.com/docs/4.17.15 
//3. Chris was used as a reference for learning how to get lodash to work w/jest :)
//4. creating duplicate array (number 10-Array.from): https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/ 
