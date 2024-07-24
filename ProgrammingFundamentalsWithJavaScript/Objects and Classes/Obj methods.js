let obj = { name: `4040`, age: 43, stupid: true };
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
let propCheck = Object.hasOwnProperty(`name`);
JSON.stringify(obj)


// Object.hasOwn()
// console.log(Object.getOwnPropertyDescriptor('name',`name`));
console.log(keys);
console.log(values);
console.log(entries);
console.log(propCheck);