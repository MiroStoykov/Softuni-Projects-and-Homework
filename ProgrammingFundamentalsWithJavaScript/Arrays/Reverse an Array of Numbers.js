function solve(num, arr) {

    let result = [];


    for (let i = 0; i < num; i++) {

        result.push(arr.shift());

    }

    console.log(result.reverse().join(` `));

}

solve(3, [10, 20, 30, 40, 50])