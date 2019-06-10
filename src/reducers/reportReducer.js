import {
	ADD_REPORT,
	REMOVE_REPORT,
	CREATE_REPORT,
	GET_REPORTS,
	UPVOTE,
	DOWNVOTE
} from '../actions/types'

const initialState = {
	reports: []
};

export default function manageReports(state = initialState, action) {
	let reports;
	switch (action.type) {
		case ADD_REPORT:
			return {

			};
		case REMOVE_REPORT:
			return {
				...state,

			};
		case CREATE_REPORT:
			return {
				...state,
				reports: [...state.reports, action.payload]
			};
		case GET_REPORTS:
			return {
				...state,
				reports: action.payload.reports
			};
		case UPVOTE:
			console.log("UP:", action.payload)
			reports = state.reports.map(report => {
				return report.id === action.payload ? {...report, votes: ++report.votes} : report
			});

			return {
				reports
			};
		case DOWNVOTE:
			console.log("DOWN:", action.payload)
			reports = state.reports.map(report => {
				return report.id === action.payload ? {...report, votes: --report.votes} : report
			});

			return {
				reports
			};

		default:
			return state
	}
}
