// Geolocation API variables
const GEO_API_KEY = 'yFBgBqKsiahMR4jx3qC3eif225ADnseM';
const GEO_API_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const parameter = '&location=';
const geo_url = GEO_API_URL + GEO_API_KEY + parameter;

// Main Api variables
const API_URL = 'http://localhost:3000/';
// const parameters = '?id=';
export const headers = {
	Accept: 'application/json',
	"Content-Type": "application/json"
};


// method: 'POST',
// 	headers: {
// 	Accept: 'application/json',
// 		'content-type': 'application/json'
// },
// body: JSON.stringify({
// 	user: this.state
// })


// Geolocation Api functions
export const fetch_address_api = (address) => {
	return fetch(geo_url + address).then(r => r.json())
};

// Main API functions
export const fetch_api = route => {
	return fetch(API_URL + route).then(r => r.json())
};
