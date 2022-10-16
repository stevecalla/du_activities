const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: Number,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
  const discount = 0.5;
  let reducedPrice = discountedBook.price * discount;
  console.log(discountedBook);
  console.log('discount = ', discount, 'original price = ', discountedBook.price, 'reduced price = ', reducedPrice);

}

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const discountedBook = new Book({ title: 'a', author: 'x', price: 10});

// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();

module.exports = Book;
