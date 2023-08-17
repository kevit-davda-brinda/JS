/*13 - Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found. */

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];

const hasComapany = (cName,itCompanies)=>{
    for(let company of itCompanies){
        if(company === cName){
            return company;
        }
    }

    return "company is not found";
}

console.log(hasComapany("Googe",itCompanies))
console.log(hasComapany("Google",itCompanies))