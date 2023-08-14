// example
let obj = Object.defineProperties({
  a: {
    value: 3,
    writable: true,
  }
},
  {
    b: {
      value: 2,
      writable: false,


    }
  }, { a: { a: 1, b: 2 }, b: 2 }) // { a: 3, b: 2 }

console.log(obj);
