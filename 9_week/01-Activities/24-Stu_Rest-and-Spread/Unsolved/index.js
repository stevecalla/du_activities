// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? //section: SPREAD
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console? //section: ALL THE SONGS
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do? //section: it will create the sum of all the values in the array
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console? //section: 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter? //Section: REST
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console? //Section: 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console? //Section: 110
console.log(additionSpread(1, 2, 3, 4, 100));
