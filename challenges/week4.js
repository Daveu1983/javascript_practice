function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  nums = nums.filter(function(num){
    return (num < 1)
  })
  return nums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBeginningWithChar = [];
  names.forEach(element => {
    if(element.charAt(0) === char){
      namesBeginningWithChar.push(element);
    }
  });
  return namesBeginningWithChar;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  words = words.filter(function(word){
    return ((word.slice(0,3)) === "to ")
  });
  return words;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  nums = nums.filter(function(num){
    return((num % 1) === 0);
  })
  return nums;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  users = users.map(function(user){
    return user.data.city.displayName;
  })
  return users;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  nums = nums.map(function(num){
    return parseFloat(Math.sqrt(num).toFixed(2));
  })
  return nums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  sentences = sentences.filter(function(sentence){
    str = str.toUpperCase();
    sentence = sentence.toUpperCase();
    return(sentence.search(str) > -1);
  })
  return sentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSide = [];
  triangles.forEach(element => {
    longestSide.push(Math.max.apply(null,element));
  });
  return longestSide;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
