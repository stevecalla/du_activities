var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var main2El = document.getElementById('main2');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice. TheEND';
var words = message.split(' ');

function countdown() {
  var timeLeft = 2;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //
    // SECTION: YOUR CODE HERE

    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = null;
      displayMessage();
      return;
    } else if (timeLeft > 1) {
      // console.log(timeLeft);
      timerEl.textContent = `${timeLeft} seconds remaining`;
    } else {
      timerEl.textContent = `${timeLeft} seconds remaining`;
    }

  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;
  main2El.textContent = message;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      mainEl.style.color = 'blue';
      var highlightText = message.search(words[wordCount])
      console.log('position = ', highlightText);
      console.log('length = ', mainEl.textContent.length);
      console.log('slice = ', main2El.textContent.slice(2));
      // console.log('letter = ', message.charAt(highlightText));
      console.log('letter = ', main2El.textContent.charAt(highlightText));
      // main2El.textContent.charAt(highlightText).style.color = 'red';
      let x = message.slice(highlightText);
      main2El.textContent = x;
      wordCount++;
    }
  }, 1000);
}

countdown();
