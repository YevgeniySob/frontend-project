import {CREATE_REPORT}                 from './types'
import {fetchingTrue, fetchingFalse} from './reportActions'
import {fetch_api, headers}          from '../adapter/adapter'

export const createReport = (report, userId) => {
	debugger;
	return (dispatch) => {
		dispatch(fetchingTrue);
		return fetch('http://localhost:3000/new_report', {
			method:  'POST',
			headers: {
				Accept: 'application/json',
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: userId,
				report
			})
		})
			.then(r => r.json())
			.then(report => {
				console.log(report)
				// dispatch({
				// 	type: CREATE_REPORT,
				// 	payload: report
				// });
				dispatch(fetchingFalse)
			})
	}
	// we want fetch
	// dispatch all the goods
};
