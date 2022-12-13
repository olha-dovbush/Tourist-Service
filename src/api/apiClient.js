const Amadeus = require('amadeus');

export const API = new Amadeus({
  clientId: process.env.REACT_APP_AMADEUS_API_KEY,
  clientSecret: process.env.REACT_APP_AMADEUS_API_SECRET,
});
