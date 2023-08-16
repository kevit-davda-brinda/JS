/*18. Write a JavaScript program to calculate age. */

function calculate_age(birthDate) {

    // get difference from current date;
    const difference = Date.now() - birthDate.getTime();

    const ageDate = new Date(difference);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    return calculatedAge;


}

function getAge(dateStr) {
    let cur = new Date();
    let tar = new Date(dateStr);
  
    // Get difference of year
    let age = cur.getFullYear() - tar.getFullYear();
  
    // If current month is > than birth month he already had a birthday
    // if (cur.getMonth() > tar.getMonth()) {
    //    age ++;
    // } 
    // If months are the same but current day is >= than birth day same thing happened 
    // else if (cur.getMonth() == tar.getMonth() && cur.getDate() >= tar.getDate()) {
    //    age ++;
    // }
  
    return age;
  }


console.log(calculate_age(new Date(2003, 4, 7)));
console.log(getAge(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));
console.log(getAge(new Date(2003, 4, 7)));
