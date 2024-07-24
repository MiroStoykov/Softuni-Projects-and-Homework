function jusi(arr) {

    let result = [];

    let num = 1;

    for (const i of arr) {
        let current = i.split(` => `);

        let fruit = current[0];
        let qnt = Number(current[1]);

        let obj = {};

        obj[fruit] = qnt;
        obj.bottles = 0;

        let counter = false;

        for (const i of result) {
            if (fruit == Object.keys(i)[0]) {
                i[fruit] += qnt;
                counter = true;
            }
        }

        if (!counter) {
            result.push(obj);
        }

        for (const i of result) {
            if (i[fruit] >= 1000) {
                let bottles = Math.floor(i[fruit] / 1000);
                i[fruit] -= (bottles * 1000);
                i.bottles += bottles;
                if (!Object.keys(i).includes(`index`)) {
                    i.index = num;
                    num++;
                }
            }
        }
    }

    let entries = [];

    for (const i of result) {
        entries.push(Object.entries(i));
    }

    entries.sort((a, b) => a[2][1] - b[2][1]);

    for (const i of entries) {
        console.log(`${i[0][0]} => ${i[1][1]}`);
    }
}

jusi(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])