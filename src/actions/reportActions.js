import {
	// ADD_REPORT,
	// REMOVE_REPORT,
	GET_REPORTS,
	// CREATE_REPORT,
	UPVOTE,
	DOWNVOTE,
	BY_STATE,
	FETCHING_TRUE,
	FETCHING_FALSE
} from './types'

// const API_URL = "http://localhost:3000"
// const get = url => {
// 	return fetch(url).then(r => r.json())
// }
//
// const adapter = {
// 	getReports: (state) => get(`${API_URL}/report_by_state?id=${staate}`)


// export const getReports = reports => {
//
// 	return {
// 		type: GET_REPORTS,
// 		payload: {
// 			reports
// 		}
// 	}
// };
export const getReports = () => {

	return (dispatch) => {
		dispatch(fetchingTrue);
		return fetch('http://localhost:3000/reports')
			.then(r => r.json())
			.then(reports => {
				dispatch({
					type:    GET_REPORTS,
					payload: reports
				});
				dispatch(fetchingFalse)
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
		dispatch(fetchingTrue)
		return fetch(`http://localhost:3000/report_by_state?state=${state}`)
			.then(r => r.json())
			.then(reports => {
				dispatch({
					type:    BY_STATE,
					payload: reports
				});
				dispatch(fetchingFalse)
			})
	}
};

export const fetchingTrue = () => ({
	type: FETCHING_TRUE
});

export const fetchingFalse = () => ({
	type: FETCHING_FALSE
});
