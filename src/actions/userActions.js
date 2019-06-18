import {
	LOGIN,
	SIGNUP,
	LOGOUT,
	UPDATE_GEOLOCATION,
	GETTING_CURRENT_STATE
} from './types'

import {
	byState
} from "./reportActions";

export const login = (user) => {
	console.log('ACTION', user);
	return {
		type: LOGIN,
		payload: user
	}
	// we want fetch
	// dispatch all th4e goods
};

export const signup = user => {
	return {
		type: SIGNUP,
		payload: user
	}
};

export const logout = () => ({
		type: LOGOUT
});

export const autoLogin = user => {
	// fetch('localhost:3000/auto_login')
	//   .then(r => r.json())
	//   .then(data => {
	//     data
	//     dispatch({user: data})
	//   })
	return {
		type: LOGIN,
		payload: user
	}
};

export const updateGeolocation = (lat, log, state) => {
	return dispatch => {
		dispatch({
			type: UPDATE_GEOLOCATION,
			payload: {
				lat, log, state
			}
		});
		dispatch(byState(state))
	}

};

export const getUserState = () => ({
	type: GETTING_CURRENT_STATE
});
