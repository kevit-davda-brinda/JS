/*24 - Use match() to count the number all because's in 
the following sentence:'You cannot end a sentence 
with because because because is a conjunction' */

const str = "You cannot end a sentence with because because because is a conjunction";

console.log(str.match(/because/g).length) // method with "g" para