import axios from 'axios';

const apiCases = axios.create({
  baseURL:
    'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
});

export default apiCases;
