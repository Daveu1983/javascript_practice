function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let firstChar = word.charAt(0);
  firstChar = firstChar.toUpperCase();
  return firstChar + word.slice(1);

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice * ((100 + vatRate) / 100)).toFixed(2)); 
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
    return parseFloat((originalPrice -   (originalPrice * (reduction / 100))).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 0){
    return str.charAt((str.length/2) - 1) + str.charAt(str.length/2);
  }else{
    return str.charAt(str.length/2);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
