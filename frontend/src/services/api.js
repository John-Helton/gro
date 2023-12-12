import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Cambia esto con la URL de tu servidor backend
});

export default api;
