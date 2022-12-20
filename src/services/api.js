import axios from 'axios';

// /r-api/?api=filmes

const baseURL = 'https://sujeitoprogramador.com';

export const api = axios.create({
  baseURL,
});
