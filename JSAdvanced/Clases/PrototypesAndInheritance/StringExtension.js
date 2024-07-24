(function () {

    String.prototype.ensureStart = function (str) {
        let start = this.substring(0, str.length);
        return start == str ? this : str + this;
    }

    String.prototype.ensureEnd = function (str) {
        let end = this.substring(this.length - str.length, this.length);
        return end == str ? this : this + str;
    }

    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    }

    String.prototype.truncate = function (n) {
        let elipsis = `...`;

        if (n > this.length) {
            return this;
        } else {
            let str = this.split(` `);
            if (str.length == 1 && n >= 4) {
                return this.substring(0, n - 3) + elipsis;
            }
            if (n < 4 && n > 0) {
                return `.`.repeat(n);
            }
        }
    }

})()

let str = `dsa321d`;

console.log(str.ensureStart(`ds`));
console.log(str.ensureEnd(`ad`));
console.log(str.isEmpty());
console.log(str.truncate(4));