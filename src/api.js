import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Utilise la variable d'environnement
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
