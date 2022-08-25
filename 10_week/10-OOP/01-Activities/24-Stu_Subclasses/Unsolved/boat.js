// TODO: Import the parent class
const Vehicle = require("./vehicle.js");

// TODO: Create a `Boat` class that extends the `Vehicle` class
class Boat extends Vehicle {
  constructor(id, type, boatPassengers) {
    super(id, 0, "BWOM, BWOM");
    this.type = type;
    this.boatPassengers = boatPassengers;
  }
  useHorn() {
    console.log(this.sound);
  }
  crewSoundOff() {
    this.boatPassengers.forEach(element => console.log(`${element}... reporting for duty`));
  }
}
const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];
const boat = new Boat(16, 'sailboat', boatPassengers);
console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
