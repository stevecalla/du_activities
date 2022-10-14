// TODO: Complete the 'counter' function below.
function counter() {
  let count = 1;

  return {
    increment: function () {
      // console.log(count)
      return count++;
      // or return ++count; with count = 0;
    }
  }
  
}

module.exports = counter;
