var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

//create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('abc')
  
  //capture input
  let shoppingListItem = $('input[name="shopping-input"]')

  // attach to ul element
  var listContainerEl = $('ul');

  // create li element
  var shoppingListEl = $('<li>');

  // append li to ul
  listContainerEl.append(shoppingListEl);
  
  // print shoppingListItem to shopping list element
  shoppingListEl.text(shoppingListItem.val());

}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);
