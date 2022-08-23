const OverloadDemo = function () {
  this.area = function (x, y) {
    console.log('1 x = ', x);
    if (!y) {
      console.log('y is not provided');
      return `\n6 The area of the square is ${Math.pow(x, 2)} sq units`;
    }
    console.log('2 y = ', y);
    return `\n7 The area of the rectangle is ${x * y} sq units`;
  };
};

const rectangle = new OverloadDemo();
console.log('0 ', rectangle);
console.log('3 rectangle.area(5, 7)', rectangle.area(5, 7));
console.log('4 rectangle.area(5)', rectangle.area(5));
