import {
	UPDATE_REPORT,
	GET_REPORTS,
	ADD_REPORT,
	UPVOTE,
	DOWNVOTE,
	BY_STATE,
	FETCHING_TRUE,
	FETCHING_FALSE,
	FIND_REPORT,
	ADD_COMMENT,
	SORT_BY_DATE,
	SORT_BY_POPULARITY,
	DOWNVOTE_COMMENT,
	UPVOTE_COMMENT,
	UPDATE_CURRENT_REPORT
} from './types'

import {
	newComment,
	points
} from '../adapter/adapter'

export const addReport = report => {
	return {
		type:    ADD_REPORT,
		payload: report
	}
};

export const getReports = () => {
	console.log('getting all reports')
	return (dispatch) => {
		return fetch('http://localhost:3000/reports')
			.then(r => r.json())
			.then(reports => {
				dispatch({
					type:    GET_REPORTS,
					payload: reports
				});
				dispatch(fetchingFalse())
			})
	}
};

export const downvoteReport = reportId => {
	return {
		type:    DOWNVOTE,
		payload: reportId
	}
};

export const upvoteReport = reportId => {
	return {
		type:    UPVOTE,
		payload: reportId
	}
};

export const downvoteComment = (reportId, commentId) => {
	return (dispatch) => {
		return points({where: 'down', commentId})
			.then(something => {
				dispatch({
					type:    DOWNVOTE_COMMENT,
					payload: {
						commentId,
						reportId
					}
				});
			})
	}
};

export const upvoteComment = (reportId, commentId) => {
	return (dispatch) => {
		return points({where: 'up', commentId})
			.then(something => {
				dispatch({
					type:    UPVOTE_COMMENT,
					payload: {
						commentId,
						reportId
					}
				});
			})
	}
};

export const byState = state => {
	return (dispatch) => {

		return fetch(`http://localhost:3000/report_by_state?state=${state}`)
			.then(r => r.json())
			.then(reports => {
				dispatch({
					type:    BY_STATE,
					payload: reports
				});
				dispatch(fetchingFalse())
			})
	}
};

export const fetchingTrue = () => ({
	type: FETCHING_TRUE
});

export const fetchingFalse = () => ({
	type: FETCHING_FALSE
});

export const getReport = id => {
	return (dispatch) => {

		return fetch(`http://localhost:3000/report?id=${id}`)
			.then(r => r.json())
			.then(report => {
				dispatch({
					type:    FIND_REPORT,
					payload: report
				});
			})
	}
};

export const updateReport = id => {
	return {
		type:    UPDATE_REPORT,
		payload: id
	}
};

export const addComment = (content) => {
	return (dispatch) => {

		return newComment(content)
			.then(report => {
				dispatch({
					type:    ADD_COMMENT,
					payload: report
				});
			})
	}
};

export const sortByDate = by => {
	return {
		type:    SORT_BY_DATE,
		payload: by
	}
};

export const sortByPopularity = by => {
	return {
		type:    SORT_BY_POPULARITY,
		payload: by
	}
};

export const updateCurrentReport = id => {
	return {
		type:    UPDATE_CURRENT_REPORT,
		payload: id
	}
};
