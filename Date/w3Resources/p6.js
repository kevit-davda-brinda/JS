/*8. Write a JavaScript function to get the difference between two dates in days.*/


function date_diff_indays(date1,date2){
    date1 = new Date(date1);
    date2 = new Date(date2);

    // console.log(date1)
    // console.log(date2)

    return (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)

}


console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));