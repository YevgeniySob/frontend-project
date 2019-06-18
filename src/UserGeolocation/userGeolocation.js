import {fetch_address_api} from "../adapter/adapter";
import {fetchingTrue} from '../actions'

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};
//
// function success(pos) {
// 	var crd = pos.coords;
//
// 	console.log('Your current position is:');
// 	console.log(`Latitude : ${crd.latitude}`);
// 	console.log(`Longitude: ${crd.longitude}`);
// 	console.log(`More or less ${crd.accuracy} meters.`);
// }

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

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

