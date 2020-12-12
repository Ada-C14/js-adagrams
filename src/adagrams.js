// import { forEach } from "core-js/fn/array";

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
        const allLetters = []
        for (const [key, value] of Object.entries(letterDist)) { // for all keys and values
            for (let i = 0; i < value; i++) { // value number of times
                allLetters.push(key); // push the letter into the allLetters array.
            }
        }
        return allLetters;
    },

    shuffleArray() {
        const array = Adagrams.fillArray()
        for (let i = array.length - 1; i > 0; i--) { // array length times
            let j = Math.floor(Math.random() * (i + 1)); // find random index
            [array[i], array[j]] = [array[j], array[i]]; // swap last index with random index
        }
        return array;
    },

    drawLetters() {
        const array = Adagrams.shuffleArray()
        let letterHand = []
        for (let i = 0; i < 10; i += 1) { // 10 times
            letterHand.push(array.pop()); // take the last element from shuffled array
        }
        return letterHand;
    },

    // wave 2 -- Play from available letters! 

    usesAvailableLetters(input, lettersInHand) {
        if (input.length > lettersInHand.length) {
            return false;
        }

        for (let char of input) {
            if (!lettersInHand.includes(char)) {
                return false;
            }
            lettersInHand.splice(lettersInHand.indexOf(char), 1);
        }
        return true;
    },

    // wave 3 -- Score word!

    scoreWord(word) {
        let score = 0

        if (word.length > 6) {
            score += 8;
        };

        for (let char of word) {
            if (char.match(/[AEIOULNRST]/ig)) {
                score += 1;
            } else if (char.match(/[DG]/ig)) {
                score += 2;
            } else if (char.match(/[BCMP]/ig)) {
                score += 3;
            } else if (char.match(/[FHVWY]/ig)) {
                score += 4;
            } else if (char.match(/[K]/ig)) {
                score += 5;
            } else if (char.match(/[JX]/ig)) {
                score += 8;
            } else if (char.match(/[QZ]/ig)) {
                score += 10;
            } else {
                console.log("Invalid character!")
                score = 0
                break;
            }
        };

        return score;
    },

    // wave 4 -- highest score!

    highestScoreFrom(array) {

        let bestScore = 0
        let bestWord = ""

        for (let word of array) {
            let score = Adagrams.scoreWord(word);
            if (score > bestScore) {
                bestWord = word
                bestScore = score
            } else if ((word.length == 10) && (score == bestScore) && (bestWord.length < 10)) {
                bestWord = word
                bestScore = score
            } else if ((score == bestScore) && (word.length < bestWord.length) && (bestWord.length != 10)) {
                bestWord = word
                bestScore = score
            }
        }

        let winner = {
            word: bestWord,
            score: bestScore
        };

        return winner;
    },
};

export default Adagrams;