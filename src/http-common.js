import axios from 'axios';

const HTTP = axios.create({
  // baseURL: 'http://157.230.118.57:3000/api/v1/',
  baseURL: 'localhost:3000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default HTTP;
