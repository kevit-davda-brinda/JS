/*4. Write a JavaScript function to get the month name from a particular date. */

function month_name(date){
    console.log(date.getMonth() + 1)

    return get_month(date.getMonth() + 1);
}

function get_month(month){
    switch(month){
        case 1 : return "January"
        case 10 : return "October"
        case 11 : return "November"
    }
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));