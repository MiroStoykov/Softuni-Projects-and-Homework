function solve(arr) {

    let regex = />>([A-Z][A-Za-z]+)<<(\d+[\.\d+]*)!(\d+)/;

    let sum = 0;

    console.log(`Bought furniture:`);

    for (const i of arr) {

        let current = regex.exec(i);

        if (current != null) {
            console.log(current[1]);

            sum += (Number(current[2]) * Number(current[3]));
        }
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

}

solve(
    ['>>Laptop<<312.2323!3',
        '>>TV<<300.21314!5',
        '>Invalid<<!5',
        '>>TV<<300.21314!20',
        '>>Invalid<!5',
        '>>TV<<30.21314!5',
        '>>Invalid<<!!5',
        'Purchase']
);

// solve('A12b s17G')