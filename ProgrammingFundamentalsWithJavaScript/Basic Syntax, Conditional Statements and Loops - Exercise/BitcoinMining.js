function bitcoinMining(nums) {

    let bitcoin = 11949.16;
    let gramGold = 67.51;
    let sum = 0;
    let firstBitcoin = '';

    for (let i = 0; i < nums.length; i++) {
        if ((i + 1) % 3 == 0) {
            nums[i] *= 0.7;
        }
        sum += nums[i] * gramGold;
        if (sum >= bitcoin) {
            firstBitcoin += i + 1;
        }
    }

    console.log(`Bought bitcoins: ${Math.floor(sum / bitcoin)}`);
    if (sum / bitcoin >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin[0]}`);
    }
    console.log(`Left money: ${(sum - (Math.floor(sum / bitcoin) * bitcoin)).toFixed(2)} lv.`);

}

bitcoinMining([3124.15, 504.212, 2511.124]);