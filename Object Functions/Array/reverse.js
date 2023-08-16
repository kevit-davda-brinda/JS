//reverse do the shallow copy

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

// reversed.push("four");
// console.log('reversed:', reversed);
// console.log('array1:', array1);


//reverse on non-array object
const arrayLike = {
    length: 3,
    abc: "foo",
    2: 4,
    3: 33, // ignored by reverse() since length is 3
};
console.log(Array.prototype.reverse.call(arrayLike));
  // { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
  // The index 2 is deleted because there was no index 0 present originally
  // The index 3 is unchanged since the length is 3
