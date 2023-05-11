const products = [
    new Product('Rosii', 5, false),
    new Product('Suc', 10, true),
    new Product('Chipsuri', 11, true),
    new Product('Bere', 6, false),
    new Product('Vin', 5, false),
    new Product('Inghetata', 10, true),
];

function renderProductList() {
    products.forEach((product) => product.render())
}

renderProductList();