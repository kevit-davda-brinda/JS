const axios = require('axios')

// axios.post('https://google.com', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


axios
    .post("https://jsonplaceholder.typicode.com/users", {
        id: 11,
        name: "Tom Brady",
        username: "Brad",
        email: "tombrad@asd.com",
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));