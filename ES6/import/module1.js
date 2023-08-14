// module1.js

// export function greet(PersonNmae){
//     console.log("hello, "+PersonNmae);
// }


// export const x = 1
// export const y = 2

// const fs = require('fs')
// fs.readFile('tp.txt', (err, inputD) => {
//    if (err) throw err;
//       console.log(inputD.toString());
// })


// const file_name = "file.txt";

// const file_read = FileReader();

// console.log(file_read);

// Default export
  function square(a) {
    return a * a;
}

const file_name = "file.txt";

// Named export
const PI = 3.14;

// export { PI }

module.exports = {PI , square};
// module.exports = foo();

const PI2 = require('./module2');

console.log(PI2)