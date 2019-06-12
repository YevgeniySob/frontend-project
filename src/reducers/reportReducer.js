import {
	REMOVE_REPORT,
	GET_REPORTS,
	UPVOTE,
	DOWNVOTE,
	BY_STATE,
	FETCHING_TRUE,
	FETCHING_FALSE,
	CREATE_REPORT
} from '../actions/types'

const initialState = {
	reports: [],
	fetching: false
};

export default function manageReports(state = initialState, action) {
	let reports;
	switch (action.type) {
		case REMOVE_REPORT:
			return {
				...state,

			};
		case CREATE_REPORT:
			return {
				...state,
				reports: [...this.state.reports, action.payload]
			};
		case GET_REPORTS:
			return {
				...state,
				reports: action.payload
			};
		case UPVOTE:
			reports = state.reports.map(report => {
				return report.id === action.payload ? {...report, votes: ++report.votes} : report
			});

			return {
				...state,
				reports
			};
		case DOWNVOTE:
			reports = state.reports.map(report => {
				return report.id === action.payload ? {...report, votes: --report.votes} : report
			});

			return {
				...state,
				reports
			};
		case BY_STATE:

			return {
				...state,
				reports: action.payload
			};
		case FETCHING_FALSE:
			return {
				...state,
				fetching: false
			};
		case FETCHING_TRUE:
			return {
				...state,
				fetching: true
			};
		default:
			return state
	}
}
