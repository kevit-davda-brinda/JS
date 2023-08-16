// example
const objA = { a: 1 }
const objB = { a: 1 }

const obj1 = [ "a" , 1 ]
const obj2 = obj1

console.log(
    Object.is(objA, objA), // true
    Object.is(objA, objB), // false
    Object.is('a', 'a'), // true
    Object.is(obj1,obj2) // true
)