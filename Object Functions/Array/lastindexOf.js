const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

animals.fill('Tiger',2,3)
console.log(animals) 
//Expected output: [ 'Dodo', 'Tiger', 'Tiger', 'Dodo' ]

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 2
