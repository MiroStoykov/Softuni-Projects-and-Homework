class Stringer {

    innerString
    innerLength 

    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;

    }

    increase(n) {
        this.innerLength += n;
    }

    decrease(n) {
        this.innerLength -= n;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let result = this.innerString.substring(0, this.innerLength);
        if (result.length < this.innerString.length) {
            return `${result}...`;
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test