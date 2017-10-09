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

//menu();

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

        var selectedProduct = -1;

        var recursiveAsyncReadLine = function(){
            
            rl.question('Please select a product by entering Product Id: ', (selectedProduct) => {
                    
                if(selectedProduct == 0){
                    rl.close();
                }
                rl.question('Please enter ideal price for the selected product: ', (userIdealPrice) => {
                        
                    //search for the selected product
                    const prod = findById(selectedProduct);

                    if (prod == null){
                        console.log("Product not found.");
                    }
                    else{
                    prod.enterIdealPrice(userIdealPrice);
                    console.log(prod.productPrice);
                    console.log("Product Ideal price added successfully.");   
                    }
                    
                    recursiveAsyncReadLine();

                });

            
            });
            
        };
        
        recursiveAsyncReadLine();

        // TODO: Log the answer in a database
        // console.log(`Your have selected: ` + selectedProduct.productName);
        
        // const rl1 = readline.createInterface({
        // input: process.stdin,
        // output: process.stdout
        // });

        // rl1.question('Please enter ideal price for the selected Product ', (userIdealPrice) => {
                
        //         prod.addPriceForProduct(userIdealPrice);

        // });

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

    listProducts();
    
    getUserOption();

    //console.log(products);

    // ask for different prices for a product
    // user will tell a productId for which he wants to add the price
    // we will seek that product from the list of products
    // add the price against that product
    // addPriceForProduct(2, 20.00); // "productId not available"; if available then add the price to that product
    // Products.FindById(prodId)[0].enterIdealPrice(2, 20.00)
    // const prod = findById(2);
    
    //console.log(prod.productName);
}

function listProducts(){
    products.forEach(iterateProducts);
}

function getUserOption(){
    menu();
}

function iterateProducts(item, index){
    console.log("Product Id: " + item.productId + "\t Product name: " + item.productName);
}

function findById(productId) {
    // return products.filter(p => p.productId == productId); //filter returns an array so changing it to use find method instead.
    return products.find(p => p.productId == productId); 
}

//unused function
/*function addPriceForProduct(userIdealPrice){
    prod.enterIdealPrice(userIdealPrice);
}*/

function addNewProduct(productName, productId) {
    const product = new Product(productName, productId);
    return product;
}
