import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-matheus-cardoso.cloudfunctions.net/',
});

export default api;
