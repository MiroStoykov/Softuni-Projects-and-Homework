function solve(arr1, arr2) {

    let products = {};

    for (let i = 0; i < arr1.length; i += 2) {
        products[arr1[i]] = Number(arr1[i + 1]);
    }

    for (let i = 0; i < arr2.length; i += 2) {
        if (arr2[i] in products) {
            products[arr2[i]] += Number(arr2[i + 1]);
        } else (
            products[arr2[i]] = Number(arr2[i + 1])
        )
    }
    let entries = Object.entries(products);

    for (const iterator of entries) {
        console.log(iterator.join(` -> `));
    }

}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    ['Pasta', '7', 'Flour', '44', 'Oil', '12',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)