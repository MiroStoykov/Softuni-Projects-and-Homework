(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(n);
        }
    }

    Array.prototype.take = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(0, n);
        }
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, el) => { return acc + el }, 0);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 21];

console.log(arr.last());
console.log(arr.skip(8));
console.log(arr.take(0));
console.log(arr.sum());
console.log(arr.average());