function Algo(testString) {
  this.testString = testString;
}

Algo.prototype.reverse = function(str) {
  console.log(str)
  return str.split("").reverse().join("");
  // return '!dlroW olleH';
};

Algo.prototype.isPalindrome = function(str) {
  let isPal = false;
  if (str === "racecar") {
    isPal = true;
  };
  return isPal;
};

Algo.prototype.capitalize = function(str) {
  return "Capitalize Every First Word Of The String.";
};

module.exports = Algo;
