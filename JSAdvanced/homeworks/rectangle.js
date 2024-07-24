function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.substring(1);
    let obj = {
        width,
        height,
        color: color,
        calcArea: function () {
            return this.width * this.height;
        }
    };
    return obj;
}

let rect = rectangle(4, 5, `red`);

console.log(rect.width);
console.log(rect.height);
rect.height = 20;
console.log(rect.collor);
console.log(rect.calcArea());


