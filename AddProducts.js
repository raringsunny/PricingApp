const readline = require("readline");

const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
  iPhone.enterIdealPrice(200);

  const android = addNewProduct("Samsung Galaxy", 2);
  android.enterIdealPrice(100);

  products.push(iPhone);
  products.push(android);

  recursiveAsyncReadLine();
}

function recursiveAsyncReadLine() {
  listProducts(); //list products

  addIdealPrice(); //user gets a prompt to select a product to which the ideal price has to be added
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

function askProductId() {
  return new Promise(resolve => {
    ask.question(
      "Please select a product by entering Product Id: ",
      productId => {
        resolve(productId);
      }
    );
  });
}

function askIdealPrice(productId) {
  return new Promise(resolve => {
    if (productId == 0) {
      ask.close();
      return;
    }
    const prod = findById(productId);
    if (prod == null) {
      console.log("Product not found");
      recursiveAsyncReadLine();
    }

    ask.question(
      "Please enter ideal price for the selected product: ",
      userIdealPrice => {
        const request = {};
        request.productId = productId;
        request.userIdealPrice = userIdealPrice;
        resolve(request);
      }
    );
  });
}

function addIdealPrice() {
  askProductId()
    .then(productId => askIdealPrice(productId))
    .then(request => {
      const prod = findById(request.productId);
      if (prod != null) {
        prod.enterIdealPrice(request.userIdealPrice);
        console.log("Product: ", prod.productPrice);
      }
      recursiveAsyncReadLine();
    });
}
