// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

// for (const song of songs) {
//   console.log(song);
// }

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

// for of loop
for (const [song, chartPosition] of moreSongs) { //todo: modified from original
  // console.log(song); //todo modified to line 28
  // console.log(moreSongs);
  // console.log(song + ` chart position is ` + chartPosition);
  console.log(`${song} chart position is ${chartPosition}`);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
