function capitalize(word) {
  if (typeof word !== 'string') throw new Error("input is not a word");
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
  if ((typeof originalPrice !== 'number') || (typeof vatRate !== 'number')) { 
    throw new Error("one of the inputs is not a number");
  }
  return roundNumber((originalPrice * ((100 + vatRate) / 100)),2); 
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
    return roundNumber((originalPrice -   (originalPrice * (reduction / 100))),2);
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
  word = word.split(" ");
  word = reverseAllWords(word);
  word = word.reverse().toString().replace(/,/g, " ");
  return word;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  words = words.map(function(word){
    word = word.split("").reverse().toString().replace(/,/g,"");
    return word;
  })
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  users = users.filter(function (user){
    if (user.type === "Linux"){
      return true;
    }else{
      return false;
    }
  })
  return users.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var count = 0;
  scores.forEach(element => {
    count += element;
    
  });
  return roundNumber((count/scores.length), 2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if((n % 15) === 0){
    return "fizzbuzz";
  }else if ((n % 3) === 0){
    return "fizz";
  }else if ((n % 5) === 0){
    return "buzz";
  }else {
    return n;
  }
}

function roundNumber(number, roundedTo){

  return parseFloat((number).toFixed(roundedTo));
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
