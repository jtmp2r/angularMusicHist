var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
function myPlanets(value, index, array) {
	document.write(value);
	document.write(index);
	document.write("<br />");	
}

planets.forEach(myPlanets); 

var capital = planets.map(function(x) {
	var sliceDice = x.slice(0, 1).toUpperCase();
	var lowerLetters = x.slice(1).toLowerCase();
	var capPlanet = sliceDice + lowerLetters;
	return capPlanet;	
	console.log("map", capital);
});


function ePlanet(letter) {
	if (letter.indexOf("e") != -1) {
		return letter;
	};
};

var filterPlanets = planets.filter(ePlanet);
console.log("Planets with E", filterPlanets);

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(x, y) {
	x += y;
	return x;
})

console.log("reduce", sentence);

	