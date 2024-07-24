function numbers(input) {

    let str = input.split(` `);
    let nums = str.map(Number).sort((a, b) => a - b);
    let sum = nums.reduce((a, b) => a + b);
    let average = Number((sum / nums.length).toFixed(2));
    let result = [];
    let statusCheck = false;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > average) {
            result.push(nums[i]);
            statusCheck = true;
        }
    }

    if (!statusCheck) {
        console.log(`No`);
        return;
    }

    let revertedResult = result.reverse().slice(0, 5);

    console.log(revertedResult.join(` `));

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
