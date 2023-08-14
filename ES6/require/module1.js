const data = require('./module2.js')
const data2 = require('../try.js')

const print_fun_module2 = ()=>{
    console.log("import_module2 printed");
}

const obj = {
    file_name:"file",
    file_type:"textconsole.log(data)",
    file_path:"./file.txt"
}

module.exports  = {print_fun_module2 ,obj}

console.log(data)
console.log(data2)