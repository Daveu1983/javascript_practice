/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  n = n.toString().split("");
  let num = 0;
  n.forEach(element => {
    num = num + parseInt(element);
    
  });
  return num;

};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if ((end === 0) || (step === 0)) throw new Error("end or step cannot be zero");
  let arr = []
  for(let i = start; i <= end; i = i+step){
    arr.push(i);
  }
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let arr = []
  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)
  users.forEach((element) =>{
    element.screenTime.forEach((item)=>{
      if (item.date === date){
        let sumVal = sumValues(item.usage)
          if (sumVal >=100){
            arr.push(element.username)
          }
      }
    })
  })
  return arr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  hexStr = hexStr.split("");
  const twoDigHexToDecConverter = arr => {
    let arr2 = []
    if (arr[0] === "0"){
    arr2.push(0)
   }
   if (arr[0] === "1"){
    arr2.push(1)
   }
   if (arr[0] === "2"){
    arr2.push(2)
   }
   if (arr[0] === "3"){
    arr2.push(3)
   }
   if (arr[0] === "4"){
    arr2.push(4)
   }
   if (arr[0] === "5"){
    arr2.push(5)
   }
   if (arr[0] === "6"){
    arr2.push(6)
   }
   if (arr[0] === "7"){
    arr2.push(7)
   }
   if (arr[0] === "8"){
    arr2.push(8)
   }
   if (arr[0] === "9"){
    arr2.push(9)
   }
   if (arr[0] === "A"){
    arr2.push(10)
   }
   if (arr[0] === "B"){
    arr2.push(11)
   }
   if (arr[0] === "C"){
    arr2.push(12)
   }
   if (arr[0] === "D"){
    arr2.push(13)
   }
   if (arr[0] === "E"){
    arr2.push(14)
   }
   if (arr[0] === "F"){
    arr2.push(15)
   }
   arr2[0] = arr2[0] * 16;

   if (arr[1] === "0"){
    arr2[0] = arr2[0]+ 0;
   }
   if (arr[0] === "1"){
    arr2[0] = arr2[0]+ 1
   }
   if (arr[0] === "2"){
    arr2[0] = arr2[0]+ 2;
   }
   if (arr[0] === "3"){
    arr2[0] = arr2[0]+ 3
   }
   if (arr[0] === "4"){
    arr2[0] = arr2[0]+ 4
   }
   if (arr[0] === "5"){
    arr2[0] = arr2[0]+ 5
   }
   if (arr[0] === "6"){
    arr2[0] = arr2[0]+ 6
   }
   if (arr[0] === "7"){
    arr2[0] = arr2[0]+ 7
   }
   if (arr[0] === "8"){
    arr2[0] = arr2[0]+ 8
   }
   if (arr[0] === "9"){
    arr2[0] = arr2[0]+ 9
   }
   if (arr[0] === "A"){
    arr2[0] = arr2[0]+ 10
   }
   if (arr[0] === "B"){
    arr2[0] = arr2[0]+ 11
   }
   if (arr[0] === "C"){
    arr2[0] = arr2[0]+ 12
   }
   if (arr[0] === "D"){
    arr2[0] = arr2[0]+ 13
   }
   if (arr[0] === "E"){
    arr2[0] = arr2[0]+ 14
   }
   if (arr[0] === "F"){
    arr2[0] = arr2[0]+ 15
   }
   return arr2.reduce((a, b) => a + b)
  }


  let redHex = hexStr[0] + hexStr[1];
  let blueHex = hexStr[2] + hexStr[3];
  let greenHex = hexStr[4] + hexStr[5];

  redHex = redHex.split("")
  blueHex = blueHex.split("")
  greenHex = greenHex.split("")

  redHex = twoDigHexToDecConverter(redHex)
  blueHex = twoDigHexToDecConverter(blueHex)
  greenHex = twoDigHexToDecConverter(greenHex)

  return("rgb(" + redHex + "," + blueHex + "," + greenHex + ")") 




};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
