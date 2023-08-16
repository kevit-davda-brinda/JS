/* 6. Write a JavaScript function to add specified minutes to a Date object. */

function add_minutes(date , minutes){
    minutes = date.getMinutes() + minutes

    date.setMinutes(minutes);

    return date;
}


console.log(add_minutes(new Date(2014,10,56), 30).toString());