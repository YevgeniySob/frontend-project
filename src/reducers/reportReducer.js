import {
	REMOVE_REPORT,
	GET_REPORTS,
	UPVOTE,
	DOWNVOTE,
	BY_STATE,
	FETCHING_TRUE,
	FETCHING_FALSE,
	CREATE_REPORT,
	FIND_REPORT,
	UPDATE_REPORT, ADD_COMMENT
} from '../actions/types'

const initialState = {
	reports: [],
	report: null,
	fetching: false
};

export default function manageReports(state = initialState, action) {
	let reports;
	let report;
	switch (action.type) {
		case FIND_REPORT:
			return {
				...state,
				report: action.payload
			};
			case UPDATE_REPORT:
			report = state.reports.find(report => report.id === action.payload)
			return {
				...state,
				report: report
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
		case ADD_COMMENT:
			report = state.reports.find(report => report.id === action.payload)
			debugger
			return {
				...state
				// reports: [...this.state.reports ]
			};
		default:
			return state
	}
}
