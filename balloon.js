exports.smallerSentence = function(string) {

  var cleanUp = string.replace(" and", "").replace(".", "").split(", ")

  var infoArray = [];
  cleanUp.forEach(function(littleStrings) {
    infoArray.push(littleStrings.split(" sets of "));
  });
  return infoArray;
};


exports.balloonMap = function(infoArray) {
  var mappedArray = [];

  infoArray.forEach(function(infoArray) {
    var balloonObject = {
      colour: infoArray[1],
      number: Number(infoArray[0])
    }
console.log (balloonObject);
    mappedArray.push(balloonObject);
  })
  return mappedArray;
};

exports.balloonCalculator = function(sets, mappedArray) {
  var totalNumber = [];
  mappedArray.forEach(function (balloonInfo){
  totalNumber.push(balloonInfo.number*sets);

});
//battled to figure out how to map back to the mappedArray after using a forEach.

console.log (totalNumber);
return totalNumber;

};
