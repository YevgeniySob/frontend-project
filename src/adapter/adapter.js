// Geolocation API variables
const GEO_API_KEY = 'yFBgBqKsiahMR4jx3qC3eif225ADnseM';
const GEO_API_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const parameter   = '&location=';
const geo_url     = GEO_API_URL + GEO_API_KEY + parameter;

// Main Api variables
const API_URL        = 'http://localhost:3000';
// const parameters = '?id=';
export const headers = {
	Accept:         'application/json',
	"Content-Type": "application/json"
};

const post = (url, params) => {
	return fetch(url, {
		method: 'POST',
		headers,
		body:   JSON.stringify(params)
	}).then(r => r.json())
};

// Geolocation Api functions
export const fetch_address_api = address => {
	return fetch(geo_url + address).then(r => r.json())
};

// Main API functions
export const fetch_api = route => {
	return fetch(API_URL + route).then(r => r.json())
};

const createReport = (report, userId) => {
	return post(`${API_URL}/new_report`, {...report, userId})
};

const createUser = (attributes) => {
	return post(`${API_URL}/users`, attributes)
};

export const newComment = (attributes) => {
	return post(`${API_URL}/add_comment`, attributes)
};

export const adapter = {
	createReport,
	createUser,
	fetch_address_api,
	newComment
};

