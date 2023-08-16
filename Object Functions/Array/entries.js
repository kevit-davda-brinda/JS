const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

for(const i of iterator1){
    console.log(i)
}

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]