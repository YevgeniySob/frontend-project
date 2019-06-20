import {fetch_address_api} from "../adapter/adapter";

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

export const userGeolocation = (updateGeolocation, getReports) => {
		console.log('Getting user geolocation');
	return navigator.geolocation.getCurrentPosition((position) => {
		const log     = position.coords.longitude;
		const lat     = position.coords.latitude;
		const address = lat + "," + log;
		console.log('Getting user state from geolocation data');
		fetch_address_api(address).then(data => {
			const state = data.results[0].locations[0].adminArea3;
			updateGeolocation(lat, log, state)
		});
	}, getReports, options)

};

