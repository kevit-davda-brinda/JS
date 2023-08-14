// Spread syntax "expands" an array into its elements



/*Example - 1 start

// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));
//   // Expected output: 6
  
//   console.log(sum.apply(null, numbers)); // function literal
//   // Expected output: 6

Example - 1 end */

iterableObj = [1,2]

console.log([1, ...iterableObj, '4', 'five', 6]) // Array literal

console.log({...iterableObj,2:"HI"}) // object literal
