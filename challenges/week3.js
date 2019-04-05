function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  nums = nums.map(function(number){
    number = Math.pow(number,2);
    return number;
  })
  return nums;
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
  let count = 0;
  people.forEach(function(person) {
    count += person.subjects.length;
  });
  return count;
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let yayOrNay = false;
  menu.forEach(element => {
    if(element.ingredients.indexOf(ingredient) > -1) {
      yayOrNay = true;
    }
  });
  return yayOrNay;
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  let dupeNums = [];
  arr1.forEach(element => {
    if(arr2.indexOf(element) > -1){
      if(!(dupeNums.indexOf(element) > -1)){
        dupeNums.push(element);
      }
    }
  });
  return dupeNums.sort(function (a,b) {return a-b});
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
