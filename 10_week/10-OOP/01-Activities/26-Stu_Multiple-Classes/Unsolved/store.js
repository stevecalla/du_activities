class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(name) {
    // console.log('stock = ', this.stock); //section
    this.stock.forEach((item) => {
      // console.log(item, item.count, item.price); //section
      if (item.name === name) {
        if (item.count > 0) {
          // TODO: Decrement the store's stock of item
          // item.count = item.count - 1; //section
          item.count--; //section

          // TODO: Increase the store's revenue
          // this.revenue = this.revenue + item.price; //section
          this.revenue += item.price; //section

          console.log(`Purchased ${item.name} for ${item.price}`);
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  replenishStock(name, count) {
    this.stock.forEach((item) => {
      if (item.name === name) {
        // TODO: Increase the store's stock of item
        // item.count = item.count + count; //section
        item.count += count; //section

        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
