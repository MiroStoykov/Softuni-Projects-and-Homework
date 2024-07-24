function subtract() {

    let n1 = document.getElementById(`firstNumber`);
    let n2 = document.getElementById(`secondNumber`);
    let sum = Number(n1.value) - Number(n2.value);
    let sumDiv = document.getElementById(`result`);
    sumDiv.innerHTML += sum;

}