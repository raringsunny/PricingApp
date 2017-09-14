//Product class
//Product data
//1. enter ideal price of the products [enter product no. ]
//2. show product information


function product(name, id)
{
    this.productName = name;
    this.productId = id;
    this.productPrice = []; //array to hold prices entered by different users.

    this.enterIdealPrice = function(){
        this.productPrice.push(10) /*a method of product class to push the values to productPrice array.
                                     not sure if this is correct? */
    }
}

