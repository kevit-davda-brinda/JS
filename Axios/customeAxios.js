const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' },
    
});

// instance.get('https://jsonplaceholder.typicode.com/users').then(
//     (data)=>console.log(data.data)
// )

instance.get('https://jsonplaceholder.typicode.com/user', {
    validateStatus: function (status) {
        console.log(status)
      return status < 500; // Resolve only if the status code is less than 500
    }
  })

instance.get().catch(function (error) {
    console.log(error.toJSON());
});