/* 7.Write a JavaScript function to test whether a date is a weekend. */

function is_weekend(date){
    if(new Date(date).getDay() === 6 || new Date(date).getDay() === 0){
        return "weekend";
    }
}


console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));