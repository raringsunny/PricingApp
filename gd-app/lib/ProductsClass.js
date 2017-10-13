const io = require('./io');
const ProductClass = require('./ProductClass');

function ProductsClass() {
  this.products = [];
}

ProductsClass.prototype.add = function(name, id) {
  const product = new ProductClass(name, id);
  this.products.push(product);
};

ProductsClass.prototype.get = function(id) {
  const indx = this.products.findIndex(product => id == product.id);
  if (indx >= 0) return this.products[indx];
};

ProductsClass.prototype.list = function() {
  this.products.forEach(product => product.print());
};

ProductsClass.prototype.select = function() {
  return new Promise(resolve => {
    io.question('Please select a product by entering Product Id: ', ans =>
      resolve(ans)
    );
  });
};

module.exports = ProductsClass;
