import { forEach } from "core-js/fn/array";

const letterDist = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 1,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
};

const Adagrams = {

    // wave 1 - Draw a hand!

    fillArray() {
        allLetters = []
        for (const [key, value] of Object.entries(letterDist)) { // for all keys and values
            for (let i = 0; i < value; i++) { // value number of times
                allLetters.push(key); // push the letter into the allLetters array.
            }
        }
        return allLetters;
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) { // array length times
            let j = Math.floor(Math.random() * (i + 1)); // find random index
            [array[i], array[j]] = [array[j], array[i]]; // swap last index with random index
        }
        return array;
    },

    drawLetters(array) {
        let letterHand = []
        for (let i = 0; i < 10; i += 1) { // 10 times
            letterHand.push(array.pop()); // take the last element from shuffled array
        }
        return letterHand;
    },

    // wave 2 -- Play from available letters! 

    usesAvailableLetters(input, lettersInHand) {
        // create counter hashes for input and lettersInHand and compare
        handCounter = {};
        for (let letter in lettersInHand) {
            handCounter[letter] += 1;
        };

        inputCounter = {};
        for (let letter in input) {
            inputCounter[letter] += 1;
        };


        for (const [letter, count] of Object.entries(inputCounter)) {
            if (handCounter[letter] < count);
            return false;
        };

        return true;

    },
};

// console.log(Adagrams.drawLetters(Adagrams.shuffleArray(Adagrams.fillArray())));

// const allLetters = Adagrams.fillArray();
// console.log(Adagrams.shuffleArray(allLetters));

// Do not remove this line or your tests will break!
export default Adagrams;