function solve(arr) {

    let result = [];

    for (const i of arr) {

        let [town, product, price] = i.split(` | `);

        let current = [town, product, Number(price)];

        if (result.length == 0) {
            result.push(current);
        } else {
            let counter = false;
            for (const j of result) {
                if (j[1] == current[1]) {
                    if (j[2] > current[2]) {
                        j[0] = current[0];
                        j[2] = current[2];
                    }
                    counter = true;
                }
            }
            if (!counter) {
                result.push(current)
            }
        }
    }

    for (const i of result) {
        console.log(`${i[1]} -> ${i[2]} (${i[0]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])