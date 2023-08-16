// create a date object with today's date
// console.log(new Date().toLocaleDateString())

// // create a date object with the date of 1 January 2017
// console.log(new Date('01-01-2017').toLocaleString())

/* find the number of days between today and 1 Jan 2017
// JavaScript program to illustrate 
    // calculation of no. of days between two date 
      
    // To set two dates to two variables
    var date1 = new Date();
    var date2 = new Date("01-01-2017");
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date1.getTime() - date2.getTime();

   
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    console.log(`Total Days between ${date2.toLocaleDateString()} and ${date1.toLocaleDateString()} is = ${Difference_In_Days}`) */
      

// create an array of date objects from our start date to our end date 
// i.e start date = 8/16/2023 and end date = 8/31/2023

const date_array = [];
const start_date = new Date('08/16/2023');
const end_date = new Date('8/31/2023')

while(start_date <= end_date){
    date_array.push(start_date.toLocaleDateString());
    start_date.setDate(start_date.getDate() + 1)
}

// console.log(date_array)

// randomly set a boolean workout property on each date object in our array




// did you workout on the first day of the year? 
// console.log(new Date(new Date().getFullYear(), 0, 1).toLocaleDateString())


// did you workout seven days ago?


console.log(new Date(Date.now()-(7*24*3600*1000)).toString())
