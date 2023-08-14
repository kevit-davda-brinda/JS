// // api url
// const api_url = "https://api.publicapis.org/entries";


// // // Defining async function
// // async function getapi(url) {

// // 	// Storing response
// // 	const response = await fetch(url);

// // 	// Storing data in form of JSON
// // 	var data = await response.json();
// // 	console.log(data);
// // 	if (response) {
// // 		hideloader();
// // 	}
// // 	show(data);
// // }
// // // Calling that async function
// // getapi(api_url);

// get_data(api_url)

// async function get_data(request) {
//     await fetch(request)
//         .then((data) => data.json())
//         .then((val) => {
//             let result = "";
//             for (let i = 0; i < val.entries.length; i++) {
//                 let API = val.entries[i].API+"\n";
//                 console.log(API)
//                 result += API ;
//             }


//             show(result)
//         })
//         .catch((error) => console.log("error Found in fetching the data"))
// }

// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
//     document.getElementById("employees").innerHTML = data;

// }


// api url
const request = new Request("/myEndpoint", {
    method: "POST",
    body: "Hello world",
});

request.body// ReadableStream


console.log(request.bodyUsed); // false

request.text().then((bodyAsText) => {
    console.log(request.bodyUsed); // true
});
