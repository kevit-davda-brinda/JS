/* 9. Write a JavaScript function to get the last day of a month. */

function lastday(year,month){
    return new Date(year,month+1 , 0).getDate();
}

console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));