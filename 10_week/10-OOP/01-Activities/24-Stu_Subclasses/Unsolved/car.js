// TODO: Import the parent class
const Vehicle = require("./vehicle.js");

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, carPassengers) {
    super(id, 4, "Beep, Beep");
    this.color = color;
    this.carPassengers = carPassengers;
  }
  wheels() {
    this.numberOfWheels = 4;
  }
  useHorn() {
    // this.sound = "Beep";
    console.log(this.sound);
  }
  checkPassengers() {
    if (this.carPassengers < 4) {
      spaceAvail = 4 - this.checkPassengers.length;
      console.log(`We have room for ${spaceAvail} more.`);
    } else {
      console.log(`This car only seats 4 people. You have ${this.carPassengers.length} passengers. I can't fit them all!`)
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
