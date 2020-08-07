import axios from 'axios';

const apiCases = axios.create({
  baseURL: process.env.REACT_APP_APIFY_URL,
});

export default apiCases;
