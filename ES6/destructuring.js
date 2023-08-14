// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // Expected output: Array [30, 40, 50]


// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;

// All variables share the same declaration, 
// so if you want some variables to be re-assignable 
// but others to be read-only, you may have to 
// destructure twice — once with let, once with const.

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
//   b: { c: d },
// } = obj; // d is re-assignable


// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;

// console.log(a,b);
// // Two variables are bound: `a` and `d`

const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);

console.log(numbers[0]=4,numbers[1])
console.log(obj)
// The properties `a` and `b` are assigned to properties of `numbers`


// Default value

// Each destructured property can have a default value. 
// The default value is used when the property is not 
// present, or has value undefined. 
// It is not used if the property has value null.
// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 2 } = { c: null }; // c is null

// console.log(a,b,c);

// const { b = console.log("hey") } = { b: undefined };

function f() {
    return [1, 2,3];
  }
  
//   const [a, b] = f();
//   console.log(a); // 1
//   console.log(b); // 2
//   const [c] = f();
//   console.log(c); // 1

// const [a, b, ...{length} ] = [1, 2, 3 , 4];
// console.log(a,b, length ); // 1 2 1

// const [nn,num,...{length}] = [1,2,3,5,76,89];
// console.log();

// const [a,b,...[c,d,...{length}]] = [1,2,3,4,5,6]
// console.log(a,b,c,d,length)

function parseProtocol(url) {
    const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    // console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
  
    const [,protocol, fullhost, fullpath] = parsedURL;
    return [protocol,fullhost,fullpath];
  }
  
  console.log(
    parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
  );
  // "https"

//   const [a, b] = new Map([
//     [1,3,4,5],
//     [3,4,5,6],
//     [3,45,6]
//   ]);
//   console.log(a, b); 


const obj1 = {
    *[Symbol.iterator]() {
      for (const v of [0, 1, 2, 3]) {
        console.log(v);
        yield v; // In JavaScript, yield is a keyword that turns a function into a generator. Unlike an array, a generator does not store values. 
        // Instead, it knows the current value and how to get the next one.
      }
    },
  };
  const [...ll] = obj1; // Only logs 0 and 1


  const props = [
    { id: 1, name: "Fizz" },
    { id: 2, name: "Buzz" },
    { id: 3, name: "FizzBuzz" },
  ];
  
  const [, , {id , name}] = props;
  
  console.log(id + " : " + name); //3 : "FizzBuzz"
  