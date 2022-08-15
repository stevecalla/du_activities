const arya = {
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

const jaime = {
  name: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:

const aryaName = arya.name;
const aryaParents = arya.parents;

console.log('1 = ', aryaName); // logs `"Arya Stark"`
console.log('2 = ', aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

const { name, parents } = arya;

console.log('3 = ', name); // logs `"Jaime Lannister"`
console.log('4 = ', parents); // logs `["Tywin Lannister", "Joanna Lannister"]` //section: will actually log ['Eddard Stark', 'Catelyn Stark']

// We can also rename our destructured properties like so:

const { name: jaimeName } = jaime;
console.log('5 =', jaimeName); // logs `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

const logCharacter = (character) =>
  console.log(
    `6 = ${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
  );

logCharacter(arya);

// We can also use array destructuring to pull off an array's elements
const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing'];
const [winterfell, casterlyRock, kingLanding] = locations;

console.log('7 = ', winterfell); // logs `"Winterfell"`
console.log('8 = ', casterlyRock); // logs `"Casterly Rock"`
console.log('9 = ', kingLanding); // logs `"Kings Landing"`

// But now we can do this:

const betterLogCharacter = ({ name, parents }) =>
  console.log(`10 = ${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

betterLogCharacter(jaime);
