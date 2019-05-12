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
  if(arr.length > 1){  
    let lastToFirst = arr.pop()
    let firstToLast = arr.shift()
    arr.push(firstToLast)
    arr.unshift(lastToFirst)
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let arrOfKeys = Object.keys(haystack);
  let needle = false;
  let upperSearchTerm = searchTerm.toUpperCase()
  arrOfKeys.forEach(element => {
    if(typeof haystack[element] === 'string'){
      let upperHaystackString = haystack[element].toUpperCase()
      let arrOfWords = upperHaystackString.split(" ");
      if (arrOfWords.indexOf(upperSearchTerm) > -1){
        needle = true
      }
    }
    
  });
  return needle;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  str = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
  let arr = str.split(" ");
  let obj = {}
  arr.forEach((element) =>{
    if(obj.hasOwnProperty(element)){
      obj[element] = obj[element] + 1
    }else{
      obj[element] = 1
    }
  })
  return obj;
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
