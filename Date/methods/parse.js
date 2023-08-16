// console.log(Date.parse("2019-01-01"));
// console.log(Date.parse("2019-01-01T00:00:00.000Z"));
// console.log(Date.parse("2019-01-01T00:00:00.000+00:00"));

// console.log(Date.parse("Jan 1, 1970")); // 0 in all implementations

// console.log(Date.parse("Thu, 01 Jan 1970 00:00:00")); // 0 in all implementation)s

// console.log(Date.parse("1970,1,1")); // 0 in Chrome and Firefox, NaN in Safar)i

// console.log(Date.parse("02 01 1970"));
// // 2678400000 in Chrome and Firefox (Sun Feb 01 1970 00:00:00 GMT+0000));
// // NaN in Safar)i

// // With explicit timezon)e
// console.log(Date.parse("Thu, 01 Jan 1970 00:00:00 GMT+0300"));
// // -10800000 in all implementations in all timezone)s
// // Single numbe)r
// console.log(Date.parse("0"));
// // 946684800000 in Chrome (Sat Jan 01 2000 00:00:00 GMT+0000));
// // NaN in Firefox);
// // -62167219200000 in Safari (Sat Jan 01 0000 00:00:00 GMT+0000))

// // Two-digit number that may be a mont)h
// console.log(Date.parse("28")); // NaN in all implementation)s

// // Two-digit year
// console.log(Date.parse("70/01/01")); // 0 in all implementation)s

// // Out-of-bounds date component)s
// console.log(Date.parse("2014-25-23")); // NaN in all implementation)s
// console.log(Date.parse("Mar 32, 2014")); // NaN in all implementation)s
// console.log(Date.parse("2014/25/23")); // NaN in all implementation)s

// console.log(Date.parse("2014-02-30"));
// NaN in Safari and Firefox);
// 1393718400000 in Chrome (Sun Mar 02 2014 00:00:00 GMT+0000))
console.log((new Date() - Date.parse(new Date()))/1000); // 1393718400000 in all implementation)s
