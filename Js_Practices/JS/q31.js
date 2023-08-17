/* 31 - Below is data of language spoken
Find Top 5 spoken language 

[{'English':25},{'French':45},{'Arabic':91},{'Spanish':24},
{'Russian':9},{'Portuguese':9},{'Dutch':8},
{'German':7},{'Chinese':5},{'Swahili':4},{'Serbian':4}]*/

const language_array = [{'English':25},{'French':45},{'Arabic':91},{'Spanish':24},
{'Russian':9},{'Portuguese':9},{'Dutch':8},
{'German':7},{'Chinese':5},{'Swahili':4},{'Serbian':4}]


// console.log(language_array[0].key())

language_array.sort((a,b)=>(Object.values(b) - Object.values(a)));

for(let i=0;i<5;i++){
    console.log(language_array[i])
}


