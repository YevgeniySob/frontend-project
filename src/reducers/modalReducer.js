import {
	SHOW_MODAL,
	HIDE_MODAL
} from "../actions/types";

const initialState = {
	displayModal: false
};

export default function manageModal(state = initialState, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return {displayModal: true};
		case HIDE_MODAL:
			return {displayModal: false};
		default:
			return state
	}
}
