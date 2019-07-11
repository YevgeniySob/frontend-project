// Geolocation API variables
const GEO_API_KEY = 'yFBgBqKsiahMR4jx3qC3eif225ADnseM';
const GEO_API_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const parameter   = '&location=';
const geo_url     = GEO_API_URL + GEO_API_KEY + parameter;

// Main Api variables
const API_URL        = 'https://dont-mess-back.herokuapp.com';
export const headers = {
	Accept:         'application/json',
	"Content-Type": "application/json"
};

const get = (url) => {
	return fetch(url).then(r => r.json())
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

export const newComment = attributes => {
	return post(`${API_URL}/add_comment`, attributes)
};

export const points = attributes => {
	return post(`${API_URL}/points`, attributes)
};

export const autoLoginFetch = (token) => {
	return fetch(`${API_URL}/auto_login`, {
		headers: {
			Authorization: token
		}
	}).then(r => r.json())
};

export const loginForm = credentials => {
	return fetch(`${API_URL}/login`, {
		method:  'POST',
		headers: {
			Accept:         'application/json',
			'content-type': 'application/json'
		},
		body:    JSON.stringify({
			user: credentials
		})
	}).then(r => r.json())
};

export const signupForm = credentials => {
	return fetch(`${API_URL}/signup`, {
		method:  'POST',
		headers: {
			Accept:         'application/json',
			'content-type': 'application/json'
		},
		body:    JSON.stringify({
			user: credentials
		})
	})
		.then(r => r.json())
};

export const upvoteFetch = id => {
	return fetch(`${API_URL}/report_vote`, {
		method:  'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept":       "application/json"
		},
		body:    JSON.stringify({
			vote:     'up',
			reportId: id
		})
	})
};

export const downvoteFetch = id => {
	return fetch(`${API_URL}/report_vote`, {
		method:  'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept":       "application/json"
		},
		body:    JSON.stringify({
			vote:     'down',
			reportId: id
		})
	})
};

export const allReportsFetch = () => {
	return fetch(`${API_URL}/reports`)
		.then(r => r.json())
};

export const byStateReportsFetch = state => {
	return fetch(`${API_URL}/report_by_state?state=${state}`)
		.then(r => r.json())
};

export const getReportFetch = id => {
	return fetch(`${API_URL}/report?id=${id}`)
		.then(r => r.json())
};

export const postNewReport = event => {
	return fetch(`${API_URL}/new_report`, {
		method: 'POST',
		body:   event
	}).then(r => r.json())
};

export const adapter = {
	getReportFetch,
	byStateReportsFetch,
	createReport,
	createUser,
	fetch_address_api,
	newComment,
	points,
	autoLoginFetch,
	loginForm,
	signupForm,
	upvoteFetch,
	downvoteFetch,
	allReportsFetch,
	postNewReport
};
