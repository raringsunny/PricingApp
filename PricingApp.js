//Product class
//Product data
//1. enter ideal price of the products [enter product no. ]
//2. show product information

// ask for different prices for a product
// user will tell a productId for which he wants to add the price
// we will seek that product from the list of products
// add the price against that product
// addPriceForProduct(2, 20.00); // "productId not available"; if available then add the price to that product
// Products.FindById(prodId)[0].enterIdealPrice(2, 20.00)

function Product(name, id) {
  this.productName = name;
  this.productId = id;
  this.productPrice = []; //array to hold prices entered by different users.

  this.enterIdealPrice = function(price) {
    this.productPrice.push(
      price
    ); /*a method of product class to push the values to productPrice array.
                                     not sure if this is correct? */
  };
}

const products = [];

main();

function main() {
  const iPhone = addNewProduct("iPhone", 1);
  const android = addNewProduct("Samsung Galaxy", 2);

  products.push(iPhone);
  products.push(android);

  listProducts(); //list products

  menu(); //user gets a prompt to select a product to which the ideal price has to be added
}

function listProducts() {
  products.forEach(item =>
    console.log(
      "Product Id: " + item.productId + "\t Product name: " + item.productName
    )
  );
}

function findById(productId) {
  // return products.filter(p => p.productId == productId); //filter returns an array so changing it to use find method instead.
  return products.find(p => p.productId == productId);
}

function addNewProduct(productName, productId) {
  const product = new Product(productName, productId);
  return product;
}

function menu() {
  const readline = require("readline");

  const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var selectedProduct = -1;

  var selectAProduct = function(selectedProduct) {
    if (selectedProduct == 0) {
      ask.close();
      return;
    }

    var enterIdealPrice = function() {
      //search for the selected product
      const prod = findById(selectedProduct);

      if (prod == null) {
        console.log("Product not found.");
      } else {
        prod.enterIdealPrice(userIdealPrice);
        console.log(prod.productPrice);
        console.log("Product Ideal price added successfully.");
      }
      recursiveAsyncReadLine();
    }

    ask.question(
      "Please enter ideal price for the selected product: ",
      userIdealPrice => enterIdealPrice(userIdealPrice)
    );
  }

  var recursiveAsyncReadLine = function() {
    ask.question(
      "Please select a product by entering Product Id: ",
      selectedProduct => selectAProduct(selectedProduct)
    );
  };
  recursiveAsyncReadLine();
}
