function solve(arr) {

    let counter = false;

    for (const a of arr) {

        let num = String(a);

        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) == Number(num[num.length - 1 - i])) {
                counter = true;
            } else (counter = false)
        }
        console.log(counter);
    }
}
solve([32, 2, 232, 1010]);