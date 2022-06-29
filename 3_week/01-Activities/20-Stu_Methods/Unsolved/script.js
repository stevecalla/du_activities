var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// todo It's done when the string "Canis Major" is added as the first element of the constellations array and no elements are removed.
console.log(constellations, constellations.length);
constellations.unshift('Canis Major');
console.log(constellations, constellations.length);

// todo It's done when "Venus" is removed from the planets array.
console.log(planets);
// planets = planets.slice(0,-1);
// planets = planets.slice(0,5);
planets.pop();
console.log(planets);

// todo It's done when the arrays constellations and planets are joined to form a new array named galaxy. The arrays constellations and planets should not be altered.
const galaxy = constellations.concat(planets);
console.log(galaxy);

// todo It's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable.
const newStar = star.toUpperCase();
console.log(newStar);