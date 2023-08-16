/* 11. Write a JavaScript function to get the maximum date from an array of dates. */

function max_date(date_array){

    let max_date = new Date(date_array[0]);

    for(date of date_array){
        if(max_date < new Date(date)){
            max_date = date;
        }
    }

    return max_date;
}


console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));