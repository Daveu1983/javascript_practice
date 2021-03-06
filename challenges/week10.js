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
  let redHex = hexStr[0] + hexStr[1];
  let blueHex = hexStr[2] + hexStr[3];
  let greenHex = hexStr[4] + hexStr[5];
  redHex = parseInt(redHex,16)
  blueHex = parseInt(blueHex,16)
  greenHex = parseInt(greenHex,16)

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
  let winner = null;
  board.forEach((element) =>{
    if((element[0] === element[1])&& (element[0] === element[2])){
      winner = getWinner(element[0], winner);
    }
  });
  let rowOne = board[0];
  let rowTwo = board[1];
  let rowThree= board[2];

  if((rowOne[0] === rowTwo[0]) && (rowOne[0] === rowThree[0])){
    winner = getWinner(rowOne[0], winner);
  }
  if((rowOne[1] === rowTwo[1]) && (rowOne[1] === rowThree[1])) {
    winner = getWinner(rowOne[1], winner);
  }
  if((rowOne[2] === rowTwo[2]) && (rowOne[2] === rowThree[2])) {
    winner = getWinner(rowOne[2], winner);
  }
  if((rowOne[0] === rowTwo[1]) && (rowOne[0] === rowThree[2])){
    winner = getWinner(rowOne[0], winner);
  }
  if((rowOne[2] === rowTwo[1]) && (rowOne[2] === rowThree[0])) {
    winner = getWinner(rowOne[2], winner);
  }
  return winner
};

function getWinner(element, winner) {
  if (element === "X") {
    winner = "X";
  }
  if (element === "0") {
    winner = "0";
  }
  return winner;
}

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};


