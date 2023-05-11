class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    render() {
        let template;
        if (this.discount) {
            template = `
            <div class="product-container">
                <h1>SOC! SOC! SOC! MEGA DISCOUNT</h1>
                <h1 class="name">Name: ${this.name}</h1>
                <h2 class="discount">Name: ${this.price}</h2>
            </div>
        `;
        } else {
            template = `
            <div class="product-container">
                <h1 class="name">Name: ${this.name}</h1>
                <h2 class="price">Name: ${this.price}</h2>
            </div>
        `;
        }
        root.innerHTML += template;
    }
}