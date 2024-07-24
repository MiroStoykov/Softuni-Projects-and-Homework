function fibonacci() {
    let n1 = 0;
    let n2 = 1;

    return function () {
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        return n1;
    }
}

let fib=fibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
