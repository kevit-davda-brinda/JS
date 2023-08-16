// example
const obj = { a: 1 }
Object.freeze(obj)
obj.prop = 2 // error in strict mode
console.log(obj) // { a: 1 }