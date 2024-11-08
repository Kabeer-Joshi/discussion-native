import axios from 'axios';
// import { API_URL } from '@/constants/config';
import { API_URL } from '../constants/config';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default api;