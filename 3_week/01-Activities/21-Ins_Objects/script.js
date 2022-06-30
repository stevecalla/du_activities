// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
console.log(planet.age);


// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

// Calla practices
planet.name = "Venus";
console.log(planet);

let a = 'name';
console.log(planet[a])

function Car(make, model, year) {
  // make = make;
  // model = model;
  // year = year;

  this.make = make;
  this.model = model;
  this.year = year;
}

// console.log(myCar);

let myCar = new Car('Eagle', 'Talon TSi', 1993);

console.log(myCar);

let anotherCar = new Car('a', 'b', 2);

console.log(myCar);
console.log(anotherCar);

// An object can have a property that is itself another object. For example, suppose you define an object called Person as follows:

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person('Rand McKinnon', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');

console.log(rand);
console.log(ken);

// Then, you can rewrite the definition of Car to include an owner property that takes a Person object, as follows:

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
const car2 = new Car('Nissan', '300ZX', 1992, ken);

console.log(car1);
console.log(car2);

console.log(car1.owner.name);
console.log(car2.owner.name);

// Note that you can always add a property to a previously defined object. For example, the statement

car1.color = 'black';

console.log(car1);
console.log(car2);