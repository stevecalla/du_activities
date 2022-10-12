// TODO: Complete the 'counter' function below.
function counter() {
  let count = 1;

  return {
    increment: function () {
      // console.log(count)
      return count++;
    }
  }
  
}

module.exports = counter;
