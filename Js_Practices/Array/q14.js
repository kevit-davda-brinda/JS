/*14 - Filter out companies 
which have more than one 'o' without the filter method */

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];

let result = "";

function filterCompany(itCompanies){
    for(let i=0;i<itCompanies.length;i++){

        let count =0;

        for(let j=0;j<itCompanies[i].length;j++){
            if(itCompanies[i].charAt(j) === "o"){
                count++;
            }
        }

        if(count > 1){
            result += itCompanies[i]+" "
        }

       
    }


    return result;
}

console.log(filterCompany(itCompanies))