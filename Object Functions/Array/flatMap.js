const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 3] : 1));

console.log(result);
// Expected output: Array [1, 2, 3, 1]
