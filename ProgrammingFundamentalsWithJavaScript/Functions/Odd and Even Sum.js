function solve(num) {

    let nums = String(num).split(``);

    let odds = 0;
    let evens = 0;

    for (let i = 0; i < nums.length; i++) {
        let n = Number(nums[i]);
        if (n % 2 == 0) {
            evens += n;
        } else (odds += n)
    }

    console.log(`Odd sum = ${odds}, Even sum = ${evens}`);

}
solve(3495892137259234) 