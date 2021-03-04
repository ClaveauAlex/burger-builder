import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-e1f82-default-rtdb.firebaseio.com/'
});

export default instance;