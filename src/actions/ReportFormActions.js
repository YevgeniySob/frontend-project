import {fetchingTrue, fetchingFalse} from './reportActions'
import {postNewReport} from '../adapter/adapter'

export const createReport = (report, userId) => {
	return (dispatch) => {
		dispatch(fetchingTrue());
		const event = new FormData();
		for (let name in report) {
			event.append(name, report[name]);
		}
		event.append('id', userId);
		postNewReport(event).then(data => {
				dispatch(fetchingFalse());
			})
		// return fetch(`http://localhost:3000/new_report`, {
		// 	method: 'POST',
		// 	body:   event
		// })
		// 	.then(r => r.json())
	}
};
