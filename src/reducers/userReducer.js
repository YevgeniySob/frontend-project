import {
	LOGIN,
	LOGOUT,
	SIGNUP
} from '../actions/types'

const initialState = {
	user: null
};

export default function manageUser(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				user: action.payload
			};
		case LOGOUT:
			return {
				user: null
			};
		case SIGNUP:
			return {
				user: action.payload
			};
		default:
			return state
	}
}
