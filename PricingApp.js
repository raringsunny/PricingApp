//Product class
//Product data
//1. enter ideal price of the products [enter product no. ]
//2. show product information

function Product(name, id)
{
    this.productName = name;
    this.productId = id;
    this.productPrice = []; //array to hold prices entered by different users.

    this.enterIdealPrice = function(price){
        this.productPrice.push(price) /*a method of product class to push the values to productPrice array.
                                     not sure if this is correct? */
    }
}

menu();

function menu() {
    /*var choice = 5;
    while(choice != 3) {
        console.log("Enter your choice: ");
        console.log("1. Add Product: ");
        console.log("2. Add Price for a Product: ");
        console.log("3. Exit");*/
    
        const readline = require('readline');

        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

        rl.question('Please enter ideal price? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for entering the price: ${answer}`);

        rl.close();
    });

        ///choice = scanf();
    }

const products = [];
main();

function main() {
   const sampleProducts =  [
    {
        "productId": "123",
        "description": "iPhone",
        "prices": [10, 20, 30],
        "idealPrice": ""
    },
    {
        "productId": "124",
        "description": "new products",
        "prices": [20, 10, 15],
        "idealPrice": ""
    }];

    const iPhone = addNewProduct("iPhone", 1);
    const android = addNewProduct("Samsung Galaxy", 2);
    products.push(iPhone);
    products.push(android);
    //console.log(products);

    // ask for different prices for a product
    // user will tell a productId for which he wants to add the price
    // we will seek that product from the list of products
    // add the price against that product
    // addPriceForProduct(2, 20.00); // "productId not available"; if available then add the price to that product
    // Products.FindById(prodId)[0].enterIdealPrice(2, 20.00)
    const prod = findById(2);
    
    console.log(prod.productName);
}

function findById(productId) {
    // return products.filter(p => p.productId == productId); //filter returns an array so changing it to use find method instead.
    return products.find(p => p.productId == productId); 
}

function addNewProduct(productName, productId) {
    const product = new Product(productName, productId);
    return product;
}
