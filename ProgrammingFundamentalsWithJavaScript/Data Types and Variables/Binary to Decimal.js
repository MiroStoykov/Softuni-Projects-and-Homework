function solve(params) {

    let sum = 0;

    for (let i = 0; i < params.length; i++) {
        if (Number(params[params.length - 1 - i]) == 1) {

            sum += Math.pow(2, i)

        }
    }

    console.log(sum);

}

solve(`00001001`)