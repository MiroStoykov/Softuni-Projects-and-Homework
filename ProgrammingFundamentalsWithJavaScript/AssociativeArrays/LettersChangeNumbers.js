function solve(str) {

    let input = str.split(` `);

    let sum = 0;

    for (const i of input) {

        if (i.length == 0) {
            continue;
        }

        let firstChar = i[0].toUpperCase();
        let num = Number(i.slice(1, i.length - 1));
        let secondChar = i[i.length - 1].toUpperCase();


        if (i[0] === firstChar) {
            num = num / (i[0].charCodeAt() - 64);
        } else {
            num = num * (i[0].charCodeAt() - 96);
        }


        if (i[i.length - 1] === secondChar) {
            num = num - (i[i.length - 1].charCodeAt() - 64);
        } else {
            num = num + (i[i.length - 1].charCodeAt() - 96);
        }

        sum += num;;
    }

    console.log(sum.toFixed(2));
}

solve(
    'P34562Z q2576f H456z'
);

// solve('A12b s17G')