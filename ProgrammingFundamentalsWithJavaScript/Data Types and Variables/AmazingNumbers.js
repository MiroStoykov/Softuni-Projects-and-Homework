function amazingNumbers(num) {

    let numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }

    console.log(String(sum).includes(`9`) ? `${num} Amazing? True` : `${num} Amazing? False`);

}

amazingNumbers(1233)