// returns the average value of an array of numbers
function avg(array) {
  
  console.log(array)
  let total = 0;

  function sum() {
    console.log('sum')
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }

  // console.log(array, array.length, total, total/array.length);
  return total/array.length;
}
// console.log(total/array.length)
let x = sum();
// console.log(x)
return x;
}

console.log(avg([10, 20, 30, 40, 50, 30]));

module.exports = avg;
