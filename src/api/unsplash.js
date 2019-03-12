import axios from 'axios';


export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1c9e5dcdeb2b2b99917669f6c495fd65d4e82dc4064bc4feb62be639721f17f3'
    }
});