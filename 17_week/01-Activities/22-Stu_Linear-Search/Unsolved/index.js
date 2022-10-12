const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
// const linearSearch = (array, element) => {};
const linearSearch = (array, element) => {

  console.log(array, element);

  for(let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      console.log('value = ', element, 'index = ', i)
      return i;
    }
  }
  return -1;
};

// console.log(linearSearch(arr, 7));

// if (typeof linearSearch === 'function') {
//   console.log('✅ function is defined');
// } else {
//   // 👇️ this runs
//   console.log('⛔️ function is NOT defined');
// }

//section missing module.exports
module.exports = {
  linearSearch
};
