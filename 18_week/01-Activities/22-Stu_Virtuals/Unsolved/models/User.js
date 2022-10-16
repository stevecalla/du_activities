const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
const virtual = userSchema.virtual('fullname');

// userSchema.virtual('fullName').get(function() {
//   return this.first + ' ' + this.last;
// });

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
virtual.get(function(value, virtual, doc) {
  return this.first + ' ' + this.last;
});


// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`
virtual.set(function(value, virtual, doc) {
  const parts = value.split(' ');
  this.first = parts[0];
  this.last = parts[1];
});
// userSchema.set(function(value, virtual, doc) {
//   const parts = value.split(' ');
//   this.first = parts[0];
//   this.last = parts[1];
// });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
