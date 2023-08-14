// example
const objA = { a: 1 }
const objB = { a: 1 }

console.log(
    Object.is(objA, objA), // true
    Object.is(objA, objB), // false
    Object.is('a', 'a') // true
)