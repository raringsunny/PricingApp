const io = require('./io');

function ProductClass(name, id) {
  this.name = name;
  this.id = id;
  this.prices = [];
}

ProductClass.prototype.setIdealPrice = function() {
  return new Promise(resolve => {
    io.question(
      'Please enter ideal price for product "' + this.name + '": ',
      ans => {
        this.prices.push(ans);
        resolve();
      }
    );
  });
};

ProductClass.prototype.print = function() {
  console.log(
    'Product Id: ' +
      this.id +
      '\t Product Name: ' +
      this.name +
      '\t Product Prices: ' +
      this.prices
  );
};

module.exports = ProductClass;
