import {
	ADD_REPORT,
	REMOVE_REPORT,
	GET_REPORTS,
	CREATE_REPORT,
	UPVOTE,
	DOWNVOTE
} from './types'

export const getReports = reports => {
	return {
		type: GET_REPORTS,
		payload: {
			reports
		}
	}
};

export const downvoteReport = reportId => {
	return {
		type: DOWNVOTE,
		payload: reportId
	}
};

export const upvoteReport = reportId => {
	return {
		type: UPVOTE,
		payload: reportId
	}
};


