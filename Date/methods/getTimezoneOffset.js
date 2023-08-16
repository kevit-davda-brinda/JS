const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

// console.log(date1.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true


// Create a Date instance for the current time
const currentLocalDate = new Date();
// Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
const laborDay2016at0324GMTminus2 = new Date("2016-05-01T03:24:00-02:00");
currentLocalDate.getTimezoneOffset() ===
  laborDay2016at0324GMTminus2.getTimezoneOffset();
// true, always, in any timezone that doesn't annually shift in and out of DST
// false, sometimes, in any timezone that annually shifts in and out of DST

// console.log(currentLocalDate , laborDay2016at0324GMTminus2)

const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-16").getTimezoneOffset(); // 240

console.log(new Date("2022-02-01").getTimezoneOffset() === new Date("2022-08-16").getTimezoneOffset())

console.log(nyOffsetSummer , nyOffsetWinter)

