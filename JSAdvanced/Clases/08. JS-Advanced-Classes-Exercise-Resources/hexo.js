class Hex {

    value;

    constructor(n) {
        this.value = Number(n);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hexString = this.value.toString(16);
        return `0x${hexString.toUpperCase()}`;
    }

    plus(n){
        
    }
}

let FF = new Hex(255);

console.log(FF.valueOf());

console.log(FF.toString());

// FF.valueOf() + 1 == 256;

// let a = new Hex(10);

// let b = new Hex(5);

// console.log(a.plus(b).toString());

// console.log(a.plus(b).toString() === '0xF');

// console.log(FF.parse('AAA'));