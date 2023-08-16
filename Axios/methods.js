const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

const get_data = axios.get(url).then((data) => {
    console.log(data.data)

});

const obj = {
    id: 32,
    name: 'Clementina',
    username: 'Moriah.Stanton',
    email: 'Rey.hitt@karina.biz',
    address: [Object],
    phone: '024-648-3804',
    website: 'ambrosebg.net',
    company: [Object]
}

axios.post(url,obj).then((reponse)=>{
    console.log(reponse.data)
   
});
// console.log(get_data)
