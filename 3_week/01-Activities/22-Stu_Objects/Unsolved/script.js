//WRITE YOUR CODE BELOW

// Work with a partner to implement the following user story:

// As a coffee shop owner, I want to store data about my customer's drink order in an object and log a message indicating whether the drink is ready or still in the queue.

// Acceptance Criteria
// todo It's done when the customerOrder object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.

const customerOrder = {
  productOrdered: 'Black Coffee',
  numberOfSugars: 2,
  isOrderReady: true,
  customerName: 'Joan',
  productNumber: 1,
  price: 3.99,
  salesTax: 1.00,
  totalBilled: 4.99,
}

console.log(customerOrder);

// todo It's done when the drink name and the number of sugars is logged to the console.

console.log('Drink Ordered = ', customerOrder.productOrdered, ', Number of sugars = ', customerOrder.numberOfSugars);

// todo It's done when, if the order is ready, the message "Ready for pick-up" logs.

if (customerOrder.isOrderReady) {
  console.log("Ready for pick-up!!");
}

// todo It's done when, if the order is not ready, the message "Still in order queue" logs.

customerOrder.isOrderReady = false;

if (customerOrder.isOrderReady) {
  console.log("Ready for pick-up!!");
} else {
  console.log("Still in order queue");
}