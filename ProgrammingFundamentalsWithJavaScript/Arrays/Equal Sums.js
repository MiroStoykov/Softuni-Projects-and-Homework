function solve(arr) {

    let counter = false;

    for (let i = 0; i < arr.length; i++) {

        let numsRight = arr.slice((i + 1), arr.length)
        let numsLeft = arr.slice(0, i);
        let numsLeftSum = 0;
        let numsRightSum = 0;

        if (numsLeft.length == 0) {
            numsLeft = 0;
        } else (
            numsLeftSum = numsLeft.reduce((a, b) => a + b)
        )

        if (numsRight.length == 0) {
            numsLeft = 0;
        } else (
            numsRightSum = numsRight.reduce((a, b) => a + b)
        )

        if (numsLeftSum == numsRightSum) {

            console.log(i);
            counter = true;
        }
    }

    if (!counter) {
        console.log(`no`);
    }
}

solve([10,
    5,
    5,
    99,
    3,
    4,
    2,
    5,
    1,
    1,
    4])