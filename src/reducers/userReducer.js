import {
	ADD_CURRENT_USER,
	REMOVE_CURRENT_USER
} from '../actions/types'

const initialState = {
	currentUser: null,

};

export default function manageUser(state = initialState, action) {
	switch (action.type) {
		case ADD_CURRENT_USER:
			return {
				...state,
				currentUser: action.user
			};
		case REMOVE_CURRENT_USER:
			return {
				...state,
				currentUser: null
			};
		default:
				return state
	}
}

