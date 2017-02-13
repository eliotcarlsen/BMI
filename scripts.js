var height = parseInt(prompt("How tall are you in inches?"));
var weight = parseInt(prompt("Do you mind telling me your weight?"));

var convertedHeight = function(height) {
	var meters = height * .025
  var heightSquared = meters * meters
  return heightSquared
};

var convertedWeight = function(weight) {
	var kilos = weight * 0.45
  return kilos
};

var bmiIndex = convertedWeight(weight)/convertedHeight(height)
alert (bmiIndex)
