
// var furtherClean = "[ [ '4', ' red' ], [ '3', ' blue' ], [ 'and 3', ' yellow' ] ]"

exports.smallerSentence = function(string) {

  var cleanUp = string.replace(" and", "").replace(".", "").split(", ")

  var infoArray = [];
  cleanUp.forEach(function(littleStrings) {
    infoArray.push(littleStrings.split(" sets of "));
  });
  // console.log (furtherClean);
  return infoArray;
};


exports.balloonMap = function(infoArray) {
var mappedArray = [];

infoArray.forEach(function (infoArray){
  var balloonObject = {
  colour: infoArray[1],
  number: Number(infoArray[0])
}

mappedArray.push(balloonObject);
})
return mappedArray;
};
