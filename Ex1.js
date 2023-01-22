var mistakes = 0;

//  2 mistakes in this case
const products = ['eggs', 'milk', 'cheese']
const productPrices = [2.89, 3.29, 5.79]
const productSold = ['eggs', 'eggs', 'cheese', 'milk']
const soldPrice = [2.89, 2.99, 5.97, 3.29]

//  0 mistakes in this case
// const products = ['rice', 'sugar', 'wheat', 'cheese'];
// const productPrices = [16.89, 56.92, 20.89, 345.99];
// const productSold = ['rice', 'cheese'];
// const soldPrice = [16.89, 345.99];


// Mapping all the products and thier prices.
const productMap = new Map();
products.forEach((product, index) => {
    productMap.set(product, productPrices[index]);
});


// Check how much mistakes have in productSold
productSold.forEach((product, index) => {
    const productSoldPrice = productMap.get(product);
    if (productSoldPrice !== soldPrice[index]) {
        mistakes++
    }
});

// Output the mistakes
console.log(mistakes);