/* 27 - Calculate the total annual income of the person by
 extract the numbers from the following text. 
 'He earns 5000 euro from salary per month, 
10000 euro annual bonus, 15000 euro online courses per month.' */

const str = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// console.log(str.match(/\d+/g))

const income_array = str.match(/\d+/g);

let annual_income = 0;

for(let i of income_array){
    annual_income += parseInt(i);
}

console.log(annual_income)