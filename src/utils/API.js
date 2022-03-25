import axios from 'axios';

export default axios.create({
  baseURL: `https://6237218ab08c39a3af7db13a.mockapi.io`,
  responseType: 'json',
});
