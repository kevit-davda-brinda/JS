// example
const obj = { a: 1 }
Object.seal(obj) // you can't add new property
obj.a = 2 // { a: 2 }
obj.b = 3 // error in strict mode
delete obj.a // error in strict mode
// syntax
console.log(Object.seal(obj))