

const print_fun_module2 = ()=>{
    console.log("import_module2 printed");
}

const obj1 = {
    file_name:"file",
    file_type:"text",
    file_path:"./file.txt"
}

export {print_fun_module2 ,obj1}



import {data} from './import_module2.js'
import {obj} from './try.js'

console.log(obj)
console.log(data)


