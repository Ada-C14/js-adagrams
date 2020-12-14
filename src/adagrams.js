const pool = {
          A:9,
          B:2,
          C:2,
          D:4,
          E:12,
          F:2,
          G:3,
          H:2,
          I:9,
          J:1,
          K:1,
          L:4,
          M:2,
          N:6,
          O:8,
          P:2,
          Q:1,
          R:6,
          S:4,
          T:6,
          U:4,
          V:2,
          W:2,
          X:1,
          Y:2,
          Z:1
};

// making the pool of all letters. two loops? taken off of slackoverflow but was the "bad way" because it scales poorly.
let allLetters = []
for(const letter in pool)
{
    for(let i=1; i <= pool[letter] ; i++)
    {
      allLetters.push(letter);
    }
}
// console.log(allLetters)
// fully stolen from stackoverflow and I only half understand what's happening in it
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
let shuffledLetters = shuffle(allLetters);
// console.log(shuffledLetters);




const Adagrams = {
  drawLetters() {
    shuffle(allLetters);
    let letterHand = allLetters.slice(0,10);
    // console.log(letterHand)
    return letterHand;
    
  },
  usesAvailableLetters(word, drawn){
    let results = []
    word = Array.from(word)
    let i = 0
    for (let letter in word) {
      if (drawn.includes(word[letter]))
      {
        results.push(true)    
        drawn.splice(drawn[i], 1);
        i += 1
      }
      else {
        results.push(false)
        i += 1
      };
    };
    
    if (results.includes(false)) {
      return false;
    }
    else {
      return true;
    };

  },
  scoreWord(word){
    let scoreChart = {1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G',],
      3: ['B', 'C', 'M', 'P' ],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']}
    let points = 0
    if (word.length >= 7 && word.length <= 10){
      points = 8;
    };
    word = word.toUpperCase()
    word = Array.from(word)
    for (let letter in word){
      for (let i = 0; i < Object.values(scoreChart).length; i++)
        if (Object.values(scoreChart)[i].includes(word[letter]))
        {
        points = points + parseInt(Object.keys(scoreChart)[i]);
      };
    };
    return points

  },
  highestScoreFrom(words){
    let scoreObject = {}
    for (let i = 0; i < words.length; i++) {
      let score = this.scoreWord[words[i]];
      scoreObject = {
        word: words[i],
        score: score
      };
    };
    console.log(scoreObject)
    let scores = Object.values(scoreObject);
    let max = Math.max(...scores);
    
    
  }
};

// // Do not remove this line or your tests will break!
export default Adagrams;
