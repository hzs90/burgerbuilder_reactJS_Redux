import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reat-my-burger-7ae9a.firebaseio.com/'
});

export default instance;
