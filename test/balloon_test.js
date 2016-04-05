var assert = require("assert");
var balloon = require("../balloon.js");

describe("For the Balloon code kata I should", function() {

  it("create a function that returns a string with just the colour and number of balloons", function() {
    var result = balloon.smallerSentence("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
    assert.deepEqual(result, [
      ['4', 'red'],
      ['3', 'blue'],
      ['3', 'yellow']
    ]);

  });
//
  it("create a function that returns an object matching the colour and number of balloons", function() {
    var result = balloon.balloonMap([
      ['4', 'red'],
      ['3', 'blue'],
      ['3', 'yellow']
    ])
    assert.deepEqual(result,[{ colour: 'red', number: 4 },
  { colour: 'blue', number: 3 },
  { colour: 'yellow', number: 3 }]);
});
//
  it("create a function that multiplies each set of balloons by 3 and returns the total number of balloons ordered by each colour", function() {
    var result = balloon.balloonCalculator(3, [{ colour: 'red', number: 4 },
  { colour: 'blue', number: 3 },
  { colour: 'yellow', number: 3 }])
    assert.deepEqual(result, [ 12, 9, 9 ]);

});
});
