function reverseString(input) {

    let str = input + ``;
    let strArray = str.split(``).reverse().join(``);

    console.log(strArray);
}

reverseString(`SoftUni`)