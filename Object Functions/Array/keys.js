const array1 = ['a', 'b', 'c'];
const iterator = array1.keys(); // this will return object

console.log(Array.isArray(iterator))// Expected : false
console.log(iterator) // output : Object [Array Iterator] {}

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2