function solve(arr1, arr2) {

    let products = [];


    for (let i = 0; i < arr1.length; i++) {

        let counter = {};

        if (i % 2 == 0) {
            counter.name = arr1[i];
            counter.quantity = Number(arr1[i + 1]);
            products.push(counter);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let counter = {};
        let current = arr2[i];

        if (i % 2 == 0) {
            let check = false;
            let index = 0;
            for (let j = 0; j < products.length; j++) {
                let currentObj = products[j];

                if (current == currentObj.name) {
                    check = true;
                    index = j;

                }
            }
            if (!check) {
                counter.name = arr2[i];
                counter.quantity = Number(arr2[i + 1]);
                products.push(counter);
            } else if (check) {
                let product = products[index];
                product.quantity += Number(arr2[i + 1]) 
            }
        }

    }

    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].name} -> ${products[i].quantity}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Pasta', '7', 'Flour', '44', 'Oil', '12',
        'Tomatoes', '70', 'Bananas', '30'
    ]

)