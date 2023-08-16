/* 16. Write a JavaScript function to count the number of days passed since the year began. */

function days_passed(date){
    
    let year = date.getFullYear();
    let month = date.getMonth();
    let days = date.getDate();

    console.log(year,month, days)

    return getDays(year,month)+days;
}


function getDays(year,month){

    if(month === 0) return 0;

    let days = new Date(year,month,0).getDate();

    for(let i=1;i<month;i++){
        days += new Date(year,i,0).getDate();
    }
    

    return days;
}


console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 1, 14)));