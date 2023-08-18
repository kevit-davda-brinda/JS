const fs = require('fs')

// const book = {
//     title: 'Ego is an Enemy',
//     author:'Ryan Holiday'
// }

// const json = JSON.stringify(book)

// fs.writeFileSync('1-json.json',json)
// const data_buffer = fs.readFileSync('1-json.json')

// console.log(data_buffer)
// console.log(data_buffer.toString())


const obj_buffer = fs.readFileSync('2-json.json')

const obj = JSON.parse(obj_buffer.toString());

obj.name = "Deep",
obj.age = 28

// console.log(obj)

fs.writeFileSync('2-json.json',JSON.stringify(obj))