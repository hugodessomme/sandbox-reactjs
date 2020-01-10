import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-course-project.firebaseio.com/'
});

export default instance;