const axios = require('axios')

const url = "https://jsonplaceholder.typicode.com/users"

const request = axios.request('https://google.com')

const get_data = async (url)=>{
    const data = await axios.get(url).then((data)=>console.log(data))

    return data
}

console.log(get_data(url))

const delete_data = async (url) => {
    return await axios.delete(url);
}

console.log("data Deleted Successfully "+delete_data(url))

const header = async (url)=>{
    return await axios.head()
}

console.log(header(url))