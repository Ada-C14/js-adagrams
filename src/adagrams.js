import { random } from "core-js/fn/number";

const Adagrams = {
  drawLetters() {
    //letters/frequencies hash
    const LETTERS = {A : 9, B : 2, C : 2, D : 4, E : 12, F : 2, G : 3, H : 2, I : 9, J : 1, K : 1, L : 4, M : 2, N : 6, O : 8, P : 2, Q : 1, R : 6, S : 4, T : 6, U : 4, V : 2, W : 2, X : 1, Y : 2, Z : 1 };

    //Letters are now being populated for game play! Start with an empty array.
    let letters = [];

    //now populating array with the correct number of letters
    for ([key] in LETTERS) {
      for(let i = 1; i <= LETTERS[key]; i++) {
        letters.push(key);
      }
    };
    //need to create a 'sample' method to return a sampling of tiles
    const randomTenTiles = _.sampleSize;
    let new_hand = randomTenTiles(letters, 10);
    return new_hand;
  },
};

drawLetters();

// Do not remove this line or your tests will break!
export default Adagrams;





