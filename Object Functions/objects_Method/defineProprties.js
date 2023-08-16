// example
let obj1 = {}
let obj = Object.defineProperties(obj1, {
  a: {
    value: 3,
    writable: true,
  },
  b: {
    value: 2,
    writable: false,
  }
}) // { a: 3, b: 2 }

console.log(obj1.b);


// const object1 = {};

// Object.defineProperties(object1,{
//   property1: {
//     value: {prop:"hi"},
//   },
//   property2: {},
// });

// console.log(object1.property1);
// // Expected output: {prop:"hi"}

// object1.property1.adding = "property_value"

// console.log(object1.property1);
// Expected output: {prop:"hi"}



