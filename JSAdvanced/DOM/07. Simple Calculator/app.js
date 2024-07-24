function calculator() {

    let obj = {
        selector1: '',
        selector2: '',
        resultSelector: '',
        init(s1, s2, result) {
            selector1 = document.querySelector(`s1`)
            selector2 = document.querySelector(`s2`)
            resultSelector = document.querySelector(`result`)
        },
        add() {
            resultSelector.textContent = Number(selector1.value) + Number(selector2.value);
        },
        subtract() {
            resultSelector.textContent = Number(selector1.value) - Number(selector2.value);
        }
    }

    return obj;
}

let calculate = calculator();
calculate.init('#num1', '#num2', '#result');



