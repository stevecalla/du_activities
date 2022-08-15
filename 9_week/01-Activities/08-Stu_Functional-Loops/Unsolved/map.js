const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

const doubledArrayV2 = originalArray.map(number => number * 2);

console.log(originalArray);
console.log(doubledArray);
console.log(doubledArrayV2);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be? //section: each value in the tripledArray will be 3x it's original value
const tripledArray = originalArray.map(data => data * 3);

console.log(tripledArray);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be? //section: the value of odd or even will be an array of the strings even or odd depending on if the number in the original array is odd or even
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(oddOrEven);

// TODO: BONUS What is the `reduce()` array method?
const sumOfArray = originalArray.reduce((element, acc) => acc); //section: returns the last value
const sumOfArray2 = originalArray.reduce((element, acc) => element + acc); // section: returns the sum of the values

console.log(sumOfArray);
console.log(sumOfArray2);

const runs = [ 1, 3, 7, 2];

const total = runs.reduce ((pv, cv) => {
  const runningTotal = pv + cv;
  console.log(`pv: ${pv}, cv ${cv}, total ${runningTotal}`)
  return runningTotal;
}, 0);

console.log(`total ${total}`)

