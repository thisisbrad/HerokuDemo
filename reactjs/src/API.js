import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_URL || 'http://private-5ecc2-batterday.apiary-mock.com',
});

export default API;
