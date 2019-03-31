function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich["fillings"];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return ("Manchester" === person.city)
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  arr = arr.filter(function(animal){
    return (animal === "sheep")
  })
  return arr.length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return ((person.address.postCode.charAt(0) === "M") && (!(isNaN(parseInt(person.address.postCode.charAt(1))))))
}


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
