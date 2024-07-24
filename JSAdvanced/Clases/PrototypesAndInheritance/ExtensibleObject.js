function extensibleObject() {
    let obj = Object.create({});

    obj.extend = function (template) {
        this.obj = Object.getPrototypeOf(template)
    }

    return obj;
}



const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template)
console.log(myObj.__proto__);
console.log(myObj);