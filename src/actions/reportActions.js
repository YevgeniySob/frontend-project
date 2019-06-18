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
	ADD_COMMENT
} from './types'

import {
	newComment
} from '../adapter/adapter'

export const addReport = report => {
	return {
		type: ADD_REPORT,
		payload: report
	}
};

export const getReports = () => {

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

export const byState = state => {
	return (dispatch) => {
		console.log('got to fetch', state);

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
					type: FIND_REPORT,
					payload: report
				});
			})
	}
};

export const updateReport = id => {
	return {
		type: UPDATE_REPORT,
		payload: id
	}
};

export const addComment = (content) => {
	return (dispatch) => {

		return newComment(content)
			.then(report => {
				dispatch({
					type: ADD_COMMENT,
					payload: report
				});
			})
	}
};
