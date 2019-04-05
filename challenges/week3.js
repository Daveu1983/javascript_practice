function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  if(words.length < 2){
    return words.toString();
  }else{
    let camelCase = [];
    for(let i = 1; i<(words.length); i++){
      camelCase.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return words[0].toString() + camelCase.toString().replace(/,/g, "");
  }
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
