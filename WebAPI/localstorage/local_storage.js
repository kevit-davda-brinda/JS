console.log(window.localStorage)

//get length of no. of name-value pair you use
console.log(window.localStorage.length); // 1

//set item to local storage
window.localStorage.setItem('theme','dark');
localStorage.setItem('theme','light');
localStorage.setItem('backgroundColor','white');
localStorage.setItem('color','#111');

//get item to local storage
console.log(localStorage.getItem('theme'));

//remove item from local storage
console.log("Item Removed "+localStorage.removeItem('theme'));

//iterate over name-value pair stored in local storage
let keys = Object.keys(localStorage);
for(let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

//storing objects
const settings = {
    backgroundColor: '#fff',
    color: '#111',
    theme: 'light'
};

localStorage.setItem('settings', JSON.stringify(settings));

console.log(localStorage.getItem('settings'));

//retrive the data from localstorage and convert back to object
let storedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(storedSettings);



addEventListener('storage', function(e){
    console.log(`The value of the ${e.key} changed for the ${e.domain}.`);
 });
