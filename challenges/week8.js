const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if((nums.indexOf(n) > -1)&&(((nums.indexOf(n)) + 1) !== nums.length)){
    return nums[(nums.indexOf(n)) + 1];
  }else{
    return null;  
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let numberOfZero = 0;
  let numberOfOne = 0;
  let arr = str.split("")
  arr.forEach(element => {
    if (element === "1"){
      numberOfOne++;
    }
    if(element ===   "0"){
      numberOfZero++;
    }
  });
  return {0: numberOfZero, 1:numberOfOne}
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  arrs.forEach(element => {
    total = total + (element.reduce((a,b) => a + b, 0))
  })
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
