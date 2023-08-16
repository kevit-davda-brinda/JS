const date1 = new Date().toJSON()
const date2 = new Date()

console.log(date1 , date2)

console.log(`today_date = ${date1.slice(8,10)}`)
console.log(`month = ${date1.slice(5,7)}`)
console.log(`year = ${date1.slice(0,4)}`)