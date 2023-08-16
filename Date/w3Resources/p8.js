/* 10. Write a JavaScript function to calculate 'yesterday's day. */

function yesterday(date){
    date = new Date(date);

    return new Date(date - 1*1000*3600*24).toString();
}


console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));