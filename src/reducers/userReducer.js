import {
	LOGIN,
	LOGOUT,
	SIGNUP,
	UPDATE_GEOLOCATION
} from '../actions/types'

const initialState = {
	user:        null,
	geolocation: {
		state: 'NY',
		lat: '40.712234',
		log: '-74.008561'
	}
};

export default function manageUser(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload
			};
		case LOGOUT:
			return {
				...state,
				user: null
			};
		case SIGNUP:
			return {
				...state,
				user: action.payload
			};
		case UPDATE_GEOLOCATION:
			return {
				...state,
				geolocation: {
					state: action.payload.state,
					lat: action.payload.lat,
					log: action.payload.log
				}
			};
		default:
			return state
	}
}
