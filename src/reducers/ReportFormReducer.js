import {
	CREATE_REPORT
} from '../actions/types'

const initialState = {
	reportForm: {}
};

export default function manageReportForm(state = initialState, action) {
	switch (action.type) {
		case CREATE_REPORT:
			return {

			};
		case 'WHATEVER':
			return {

			};
		default:
			return state
	}
}
