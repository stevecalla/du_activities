// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(type, raining, noise) {
  this.type = type;
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal("dog", true, 'Woof!');
console.log(dogs)
const cats = new Animal("cat", false, 'Meow!');
console.log(cats)

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an object's properties after they're created
cats.raining = true;
cats.makeNoise();

const massHysteria = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
