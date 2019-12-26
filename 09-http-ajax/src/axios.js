import axios from 'axios';

// We can create as many axios instances as we want!
// Each instance configuration will override 
// global configuration defined in index.js
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export default instance;