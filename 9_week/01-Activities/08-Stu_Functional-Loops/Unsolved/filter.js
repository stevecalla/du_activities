const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(function(data) {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log('even # = ', evenNumbers);
console.log('original array = ', originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? //section: filter is checking the originalArray, filtering for prime and creating a new array called primeArray
const primeArray = originalArray.filter(isPrime);

console.log('prime array = ', primeArray); //section added this console.log


// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
//section: filter is looking checking for num > 5, then placing them in an array called moreThan5Array
const moreThan5Array = originalArray.filter(num => num > 5);

console.log('> 5 = ', moreThan5Array); //section add this console.log

