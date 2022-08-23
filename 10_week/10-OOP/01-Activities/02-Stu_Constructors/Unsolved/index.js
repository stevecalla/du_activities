// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
class Developer {
  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
    // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
      console.log(this.name, this.tech);
    };
  }
}

// TODO: Create a new object using the 'Developer' constructor
const besty = new Developer("Besty", "Javascipt");

// TODO: Call the 'introduction()' method on the new object
besty.introduction();



