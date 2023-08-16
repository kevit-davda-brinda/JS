const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

array1[4]='g'

console.log(array1);
console.log(array1[3]);
console.log(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
