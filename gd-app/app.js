const ProductsClass = require('./lib/ProductsClass');
const productCollection = new ProductsClass();

productCollection.add('iPhone', 1);
productCollection.add('Samsung Glaxy', 2);

productCollection.list();

function handleUserResponse(ans) {
  const product = productCollection.get(ans);
  if (product) product.setIdealPrice().then(() => askQuestion());
  else {
    if (ans == 'l') productCollection.list();
    else console.log('ALERT: Not a valid product Id.');
    askQuestion();
  }
}

function askQuestion() {
  productCollection.select().then(handleUserResponse);
}

askQuestion();
