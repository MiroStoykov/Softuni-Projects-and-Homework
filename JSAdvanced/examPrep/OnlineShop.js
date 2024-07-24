class OnlineShop {

    warehouseSpace;
    products = [];
    sales = [];

    constructor(n) {
        this.warehouseSpace = Number(n);
    }

    loadingStore(product, quantity, spaceRequired) {

        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        let check = this.findPrtoduct(product);

        if (!check) {
            let obj = {
                product: product,
                quantity: quantity
            }
            this.products.push(obj);
        } else {
            check.quantity += quantity;
        }
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {

        let result = this.findPrtoduct(product);

        if (result == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        if (result.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        } else {
            let qnt = result.quantity;
            result.quantity = minimalQuantity;
            return `You added ${minimalQuantity - qnt} more from the ${product} products.`
        }
    }

    sellProduct(product) {

        let result = this.findPrtoduct(product);

        if (result == undefined || result.quantity == 0) {
            throw new Error(`There is no ${product} in the warehouse.`)
        } else {
            result.quantity -= 1;
            let obj = {
                product: product,
                quantity: 1
            }
            this.sales.push(obj);
            return `The ${product} has been successfully sold.`
        }

    }

    revision() {
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!")
        }

        let result = [];
        result.push(`You sold ${this.sales.length} products today!`)
        result.push("Products in the warehouse:")
        for (const i of this.products) {
            result.push(`${i.product}-${i.quantity} more left`)
        }

        return result.join(`\n`);
    }

    findPrtoduct(product) {
        let result = this.products.find(p => p.product == product);
        return result;
    }
}

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));

// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.loadingStore('TV', 40, 500));