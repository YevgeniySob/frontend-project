import {
	HIDE_MODAL,
	SHOW_MODAL
} from "./types";

export const hideModal = () => {
	return {
		type: HIDE_MODAL
	}
};

export const showModal = () => {
	return {
		type: SHOW_MODAL
	}
};
