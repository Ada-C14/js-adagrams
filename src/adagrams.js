const Adagrams = {

  drawLetters() {
    build_pool();
    const shuffled = letter_pool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  },
};


let letter_pool = [];
const build_pool = function () {
  const pool = {A:9,
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
          Z:1};

  Object.keys(pool).forEach(function (letter) { 
    let number = pool[letter]
    for (let i = 0; i < number; i ++){
      letter_pool.push(letter)
    }
    return letter_pool
  }); 
    
};

// Do not remove this line or your tests will break!
export default Adagrams;
