// example
const proto = { a: 1 }
// const obj = Object.create(proto)
const obj = proto
console.log(proto.isPrototypeOf(obj) )// true
