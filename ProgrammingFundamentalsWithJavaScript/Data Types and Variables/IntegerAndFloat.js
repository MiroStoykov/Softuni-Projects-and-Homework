function integerAndFloat(n1, n2, n3) {

    let sum = n1 + n2 + n3;

    console.log(sum % 1 == 0 ? `${sum} - Integer` : `${sum} - Float`);

}