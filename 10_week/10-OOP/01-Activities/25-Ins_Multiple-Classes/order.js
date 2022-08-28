class Order {
  constructor(item) {
    this.item = item;

    this.id = Math.floor(Math.random() * 99) + 1;
    console.log('3 order = ', this); //section
  }
}

module.exports = Order;
