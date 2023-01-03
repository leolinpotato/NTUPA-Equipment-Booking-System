import axios from 'axios';

const API_ROOT = "http://localhost:4001";

const instance = axios.create({
  baseURL: API_ROOT,
});

export default instance;


