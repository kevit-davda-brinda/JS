// const request = new Request("https://api.publicapis.org/entries")

// console.log(request)
// let c = 0;
// console.log("fetching data start")
// const myInterval = setInterval(() => {
//     console.log(++c)
//     const result = get_data(request);
//     if (result) {
//         clearInterval(myInterval);
//     }
// }, 1000);
// // get_data(request);
// console.log("fetching data end")

// function get_data(request) {
//     fetch(request)
//         .then((data) => data.json())
//         .then((val) => {
//             for (let i = 0; i < 10; i++) {
//                 const API = val.entries[i].API;
//                 console.log(API)
//                 document.write(`${API}  `)
//             }
//         })
//         .catch((error) => console.log("error Found in fetching the data"))

//     return true;
// }


const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then((myBlob) => {
  // do something with the blob sent in the request
  console.log(myBlob)
});


