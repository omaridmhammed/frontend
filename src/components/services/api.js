import axios from 'axios';
import { useAuthStore } from '../../stores/authStore.js';


const api = axios.create({
  baseURL: 'http://localhost:5000/api' // URL de base de l'API
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore && authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

