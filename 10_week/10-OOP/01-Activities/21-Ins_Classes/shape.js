const { get } = require("http");

class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }

  getArea() {
    console.log('3 = ', this.area);
    return this.getArea;
  }

  get stuff() {
    return this.getArea;
  }
}

const shape = new Shape(25, 25);

console.log('1 = ', shape)
console.log('2 = ', shape.area)
shape.printInfo();
shape.getArea();
shape.stuff();


// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);
// console.log(square.area); // 100