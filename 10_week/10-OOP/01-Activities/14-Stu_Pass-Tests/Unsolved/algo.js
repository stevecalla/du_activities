function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  // return "!dlroW olleH";
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  let passTest = false;
  // if (str === 'racecar') {
  //   passTest = true;
  // };
  str === 'racecar' ? passTest = true : passTest = false;
  return passTest;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  let strArray = str.split('');
  // console.log(strArray.length)
  let capArray = []; 

  for (let i = 0; i < strArray.length; i++) {
    // console.log(i, strArray[i]);

    strArray[i] === " " ? (
      // console.log('space'),
      capArray.push(strArray[i]),
      capArray.push(strArray[i + 1].toUpperCase()),
      i = i + 1
      ) : 
      i === 0 ? capArray.push(strArray[i].toUpperCase()) :
      capArray.push(strArray[i])
    
  }
  return capArray.join('');
  // return "Capitalize Every First Word Of The String.";
};

module.exports = Algo;
