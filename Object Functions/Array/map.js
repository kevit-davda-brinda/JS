//this will help in deep copy

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x + 2);

console.log(map1);
// Expected output: Array [3, 6, 11, 18]

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value*2 }));
  
  reformattedArray[3] = { key: 4, value: 40 }

  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]
  