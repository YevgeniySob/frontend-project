import {
	ADD_COMMENT,
	REMOVE_COMMENT
} from '../actions/types'

const initialState = {
	comments: []

};

export default function manageComments(state = initialState, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.playload]
			};
		case REMOVE_COMMENT:
			return {
				...state,
				currentUser: null
			};
		default:
			return state
	}
}
