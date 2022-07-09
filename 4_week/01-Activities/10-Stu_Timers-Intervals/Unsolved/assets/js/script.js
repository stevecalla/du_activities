var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var main2El = document.getElementById('main2');
var main3El = document.getElementById('main3');
var main4El = document.getElementById('main4');
var main5El = document.getElementById('main5');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice. TheEND';

  // var message =
  // 'Some say the world will end in 🔥, Some say in ice.';

function countdown() {
  var timeLeft = 3;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //
    // SECTION: YOUR CODE HERE


    timerEl.textContent = `${timeLeft} seconds remaining`;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = `${timeLeft} seconds remaining`;
      clearInterval(timeInterval);
      // timerEl.textContent = null;
      displayMessage();
      return;
    } 
    
    // else if (timeLeft > 1) {
    //   // console.log(timeLeft);
    //   timerEl.textContent = `${timeLeft} seconds remaining`;
    // } else {
    //   timerEl.textContent = `${timeLeft} seconds remaining`;
    // }

    // console.log(timeLeft);
  }, 1000);
}


var words = message.split(' ');
console.log(words)

let position = 0; 

for (i = 0; i < words.length; i++) {
  position = position + words[i].length;
  console.log(position)
}

let y = Array.from(message);
console.log(y)
// main3El.textContent = y;

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;
  var count = 0;
  var position = 0;
  // main2El.textContent = message;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {

      // position2++;
      // console.log('count = ', count, 'length =', words[count].length, 'position = ', position, 'postion+length = ', position + words[wordCount].length, 'postion+length+2 = ', position + words[wordCount].length + 2);
      

      // Display one word of the message
      mainEl.textContent = words[wordCount];

      mainEl.style.color = 'blue';
      var highlightText = message.search(words[wordCount])
      // console.log('position = ', highlightText);
      var length = mainEl.textContent.length;
      // let x = message.slice(highlightText);
      // main2El.textContent = x;

      let firstSection = y.slice(0, highlightText - 1);
      // let firstSection = y.slice(0, position + words[wordCount].length + count + 1);
      // console.log(y.slice(0, position + words[wordCount].length + count + 1).join(''))

      let highlightSection =  words[wordCount];
      // highlightSection = 'hello'
      // highlightSection = y.slice(position, position + words[wordCount].length)

      let lastSection =  y.slice(highlightText + length);

      if (wordCount === 0) {
        main3El.textContent = null;
        main4El.textContent = highlightSection;
        main5El.textContent = lastSection.join('');
      } else if (wordCount === 52 || wordCount === 0) {
        main3El.textContent = message;
        main4El.textContent = null;
        main5El.textContent = null;
      } else {
        main3El.textContent = firstSection.join('');
        main4El.textContent = highlightSection;
        main5El.textContent = lastSection.join('');
        main3El.style.color = 'green';
        main4El.style.color = 'red';
        main5El.style.color = 'blue';
        // document.getElementById('dynamic').style.display = 'flex';
      }


      wordCount++;
      // console.log(count, position);
      count++;
      position = position + words[count].length;
      // console.log('count = ', count, 'position =', position);
      // console.log(wordCount)
    }
  }, 1000);
}

countdown();


