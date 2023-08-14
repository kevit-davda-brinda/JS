// import { greet } from './module1.js';

// greet("Radhika");
// greet("Deep")

// import the exports
// import foo, {PI} from './module1.js';

const {PI,square} = require('./module1.js');

// use the imported stuff
// console.log(foo(PI));
console.log(PI,square(5));

// const PI = "6";

module.exports = ()=>{
    return "function exported by required"
}

module.exports  = PI



// const realFs = require('fs');

// console.log(realFs.readFile('./file.txt'));