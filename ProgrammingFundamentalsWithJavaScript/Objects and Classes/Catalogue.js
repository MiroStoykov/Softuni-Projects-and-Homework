function solve(arr) {

    let catalogue = [];
    let counter = false;
    let count = 0;


    for (const i of arr) {
        let obj = {};
        let current = i.split(` : `);
        obj.productName = current[0];
        obj.productPrice = Number(current[1]);
        catalogue.push(obj);
        count++;
    }

    let sortedCatalogue = catalogue.sort((a, b) => a.productName === b.productName ? 0 : a.productName < b.productName ? -1 : 1);

    for (let i = 0; i < count; i++) {

        let current = sortedCatalogue[i].productName;
        let next = '';
        if (i < count - 1) {
            next = sortedCatalogue[i + 1].productName;
        }
        if (counter == false) {
            console.log(current[0]);
            counter = true;
        }
        if (current[0] != next[0]) {
            counter = false;
        }


        let obj = sortedCatalogue[i];

        console.log(`  ${obj.productName}: ${obj.productPrice}`);

    }
}



solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])