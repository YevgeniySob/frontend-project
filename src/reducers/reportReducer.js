import {
	GET_REPORTS,
	UPVOTE,
	DOWNVOTE,
	BY_STATE,
	FETCHING_TRUE,
	FETCHING_FALSE,
	CREATE_REPORT,
	FIND_REPORT,
	UPDATE_REPORT,
	ADD_COMMENT,
	SORT_BY_POPULARITY,
	SORT_BY_DATE,
	UPVOTE_COMMENT,
	DOWNVOTE_COMMENT,
	UPDATE_CURRENT_REPORT,

} from '../actions/types'

const initialState = {
	reports:  [],
	report:   null,
	fetching: false,
	sortBy:   'date'
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
			report  = reports.find(report => report.id === action.payload);
			return {
				...state,
				reports: reports,
				report:  report
			};
		case DOWNVOTE:
			reports = state.reports.map(report => {
				return report.id === action.payload ? {...report, votes: --report.votes} : report
			});

			report = reports.find(report => report.id === action.payload);
			return {
				...state,
				reports: reports,
				report:  report
			};
		case UPVOTE_COMMENT:
			report          = state.reports.find(report => report.id === action.payload.reportId);
			report.comments = report.comments.map(comment => {
				return comment.id === action.payload.commentId ? {...comment, points: ++comment.points} : comment
			});
			return {
				...state,
				report: report
			};
		case DOWNVOTE_COMMENT:
			report          = state.reports.find(report => report.id === action.payload.reportId);
			report.comments = report.comments.map(comment => {
				return comment.id === action.payload.commentId ? {...comment, points: --comment.points} : comment
			});
			return {
				...state,
				report: report
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
			return {
				...state,
				report: action.payload
			};
		case SORT_BY_POPULARITY:
			return {
				...state,
				sortBy: action.payload
			};
		case SORT_BY_DATE:
			return {
				...state,
				sortBy: action.payload
			};
		case UPDATE_CURRENT_REPORT:
			report = state.reports.find(report => report.id === parseInt(action.payload))
			return {
				...state,
				report: report
			};
		default:
			return state
	}
}
