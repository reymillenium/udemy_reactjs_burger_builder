import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-reactjs-burger-bui-82d48.firebaseio.com/'
});

export default instance;