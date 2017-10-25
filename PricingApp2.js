function Product(productId, productName)
{
    this.ProductName = productId;
    this.ProductName = productName;
    this.ProductIdealPrice = [];

    this.EnterIdealPrice = function(idealPrice){
        this.ProductIdealPrice.push(price);
    }
}

const products = [];

main();

function main(){
    const iPhone = addNewProduct("1", "iPhone 7");
    const Android = addNewProduct("2", "Samsung Galaxy");

    products.push(iPhone);
    products.push(Android);

    listProducts();

}

function addNewProduct(productId, productName){
    const product = new Product(productId, productName);
    return product;
}

function listProducts(){
    products.forEach(item =>
        console.log("Product Id: " + item.productId + "\t Product Name: " + item.productName)
    );
}