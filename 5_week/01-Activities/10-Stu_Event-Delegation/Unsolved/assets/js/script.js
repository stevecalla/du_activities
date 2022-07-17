var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');


  $( "ul" ).parent().css( "border", "2px solid yellow" );
  $( "li" ).parent().css( "border", "2px solid red" );
}


shoppingFormEl.on('submit', handleFormSubmit);

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above

//section:using vanilla js to remove
// document.getElementById('shopping-list').addEventListener('click', handleDelete);

// function handleDelete(event) {
//   console.log(event, event.target, event.target.parentNode)
//   console.log('using vanilla js to remove')
//   event.target.parentNode.remove();
// }

// //section: using jQuery event listener
shoppingListEl.on("click", ".delete-item-btn", handleItemDelete)

// // TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
// //section: using jQuery to remove event.target
function handleItemDelete(event) {
  event.preventDefault();
  console.log('using jQuery to remove');
  $(event.target).parent('li').remove();

  //section:extra/explore console.logs and other ways to remove
  // $(event.target).parent('li').parent('ul').remove();
  // console.log(event)
  // console.log(event.target);
  // console.log(this);
  // console.log($(event.target).parent('li'))
  // console.log($(event.target).parent('li').parent('ul'))
  // console.log($(event.target).parent('li').parent('ul').parent('h1'));
  // $( "li" ).parent().css( "border", "2px solid red" );
  // $(this).parent('li').remove();
  // $(event.target).remove(); //only removes the button
}
