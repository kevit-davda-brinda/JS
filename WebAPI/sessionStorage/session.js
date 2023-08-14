//accessing session
// console.log(window.sessionStorage);

//window is global object you use directly
console.log(sessionStorage);

//storing data in session storage
sessionStorage.setItem('mode','dark');
sessionStorage.setItem('theme','light');
sessionStorage.setItem('backgroundColor','white');
sessionStorage.setItem('color','#111');

//getting data from session storage
const mode = sessionStorage.getItem('mode');
console.log(mode); // 'dark'

//remove item by name from sessionStorage
sessionStorage.removeItem('mode');

//insert all item by itretor in session storage
let keys = Object.keys(sessionStorage);
for(let key of keys) {
  console.log(`${key}: ${sessionStorage.getItem(key)}`);
}

//delete all item in Session Storage
// sessionStorage.clear();