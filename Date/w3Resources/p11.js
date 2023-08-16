/* 14. Write a JavaScript function to get the number of days in a year.*/

function days_of_a_year(year){

    let days  = new Date(year,0,0).getDate();

    for(let i=1;i<12;i++){
        days += new Date(year,i,0).getDate();
    }

    return days;
}



console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));