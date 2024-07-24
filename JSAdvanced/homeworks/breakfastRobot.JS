function solve() {

    let products = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    let ingredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    return function (input) {

        let command = input.split(` `);

        if (command[0] == `report`) {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }

        if (command[0] == `restock`) {

            let microelement = command[1];
            let quantity = Number(command[2]);

            ingredients[microelement] += quantity;

            return `Success`;
        }

        if (command[0] == `prepare`) {

            let product = Object.entries(products[command[1]]);
            let quant = Number(command[2]);

            product.forEach(a => a[1] = a[1] * quant);

            let counter = true;

            for (const i of product) {
                if (ingredients[i[0]] < i[1]) {
                    counter = false;
                    return `Error: not enough ${i[0]} in stock`;
                }
            }

            if (counter) {
                for (const j of product) {
                    ingredients[j[0]] -= j[1];
                }
                return `Success`
            }
        }
    }
}
let func = solve();

console.log(func(`restock carbohydrate 100`));
console.log(func(`restock flavour 100`));
console.log(func(`report`));
console.log(func(`prepare lemonade 4`));
console.log(func(`report`));

