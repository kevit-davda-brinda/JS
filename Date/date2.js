const date = new Date();

console.log(date)

const [today_date , month , year] = [date.getDate() , date.getMonth() + 1 , date.getFullYear()]

const [hours , minutes , seconds] = [date.getHours() , date.getMinutes() , date.getSeconds()]

console.log(`today_date = ${today_date}`)
console.log(`month = ${month}`) // months starts from 0 i.e jan = 0 ,  feb = 1, etc..
console.log(`year = ${year}`)

console.log(`hours = ${hours}`)
console.log(`minutes = ${minutes}`)
console.log(`seconds = ${seconds}`)