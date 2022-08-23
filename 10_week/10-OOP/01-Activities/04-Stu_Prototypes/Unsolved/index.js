// TODO: Add a comment describing what kind of function this is
//section this is a class / constructor function
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//section prototype is adjusting the definiton of the Character class to add the printStats method
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
//section this method determines if the Character is alive; if hitpoints is greater than > isAlive is true
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
//section this function is deducing hitpoints from strength
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// section this function is increasing the level of the Character
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior); //reduce hitpoints from 75 to 65 (or by 10)

// TODO: Add a comment describing what you expect to see printed in the console
//section this will log the warrior character with name Crusher, type warrior, age 25, strength 10, hitpoints 65 (per the call in line 52)
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
//section this will log true since warrior hitpoints are > 0 at 55
warrior.isAlive();
//section log nothing since levelUp does not have a console log
rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// section log `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
rogue.printStats(); //this.name = Dodger, this.type = Rogue, this.age = 25, this.strength = 25, this.hitpoints = 75 due to the call on 62
