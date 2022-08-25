const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);

    this.sideA = sideA; //assigns the argument to a property
    this.sideB = sideB; //assigns the argument to a property

  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
