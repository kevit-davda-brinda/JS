const date = new Date(); // creating instance



//date in differ formate 
// console.log(date.toString()); // Wed Aug 16 2023 11:40:24 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); // Wed Aug 16 2023
// console.log(date.toISOString()); // 2023-08-16T06:10:24.189Z
// console.log(date.toJSON()); // 2023-08-16T06:10:24.189Z
// console.log(date.toLocaleDateString()); // 8/16/2023
// console.log(date.toLocaleString()); // 8/16/2023, 11:40:24 AM
// console.log(date.toLocaleTimeString()); // 11:40:24 AM
// console.log(date.toTimeString()); // 11:40:24 GMT+0530 (India Standard Time)
// console.log(date.toUTCString()); // Wed, 16 Aug 2023 06:10:24 GMT


// const myCreatedDate = new Date(2023,0,7)
// const myCreatedDate = new Date(2023,0,7,5,3,69)
// const myCreatedDate = new Date("2023-01-17")
const myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

const myTimeStaps = Date.now();

// console.log(myTimeStaps);
// console.log(Math.floor(Date.now()/1000));

const new_date = new Date();
console.log(new_date.toLocaleString())

new_date.toLocaleString('default',{
    weekday : "long"
})

console.log(new_date.toLocaleString('default',{
    weekday : "short"
}))
