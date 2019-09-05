import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/diipacheco/shopping-cart-json-server',
});

export default api;
