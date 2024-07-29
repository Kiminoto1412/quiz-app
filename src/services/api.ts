import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8000/api';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
