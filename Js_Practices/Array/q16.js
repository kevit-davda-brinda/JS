/*16 - Reverse the array without reverse method */

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];

const array = []

for(let i=0;i<itCompanies.length;i++){
    array[i] = itCompanies[itCompanies.length-1-i]
}

console.log(array)