let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let quantities = [9,2,2,4,12,2,3,2,9,1,1,4,2,6,8,2,1,6,4,6,4,2,2,1,2,1]
let letters = []

const buildLetters = () => {
  for (const index in alphabet) {
    for (let i=0; i < quantities[index]; i++) {
      letters.push(alphabet[index]);
}}};

buildLetters();
console.log(letters);


const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1

    //letterQuantity = {"A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S": 4, "T": 2, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1}

  
    
      
    // letter_quantity.each do |letter, qty|
    //   qty.times do
    //     letters_pool << letter.to_s
    //   end
    // end

    // #p letters_pool
    // drawn_letters = letters_pool.sample(10)
    // return drawn_letters
  },
};



// Do not remove this line or your tests will break!
// export default Adagrams;
