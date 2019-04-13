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
    return ((word.charAt(0) === 't')&&(word.charAt(1) === 'o')&&(word.charAt(2) === ' '))
  });
  return words;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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