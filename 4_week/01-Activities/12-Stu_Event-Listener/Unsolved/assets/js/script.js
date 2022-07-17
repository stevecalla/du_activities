var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// As a developer, I want to increment or decrement a count when a user clicks on a button.

// TODO: Add event listener to increment button
// It's done when a user clicks on the increment button and the count is increased by 1.
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText()
})

// TODO: Add event listener to decrement button 
// It's done when a user clicks on the decrement button and, if the count is greater than 0, the count is decreased by 1.
decrementEl.addEventListener('click', function() {
  if (count > 0) {
    count--;
  }
  setCounterText()
})

