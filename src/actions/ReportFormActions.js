import {CREATE_REPORT}                 from './types'
import {fetchingTrue, fetchingFalse} from './reportActions'
import {adapter}          from '../adapter/adapter'

export const createReport = (report, userId) => {
	return (dispatch) => {
		dispatch(fetchingTrue);
		const event = new FormData();
		for(let name in report){
			event.append(name, report[name]);
		}
		event.append('id', userId)
		return fetch(`http://localhost:3000/new_report`, {
			method: 'POST',
			body:   event
		})
			.then(r => r.json())
			.then(console.log)
		// adapter.createReport(event, userId)
		// 	.then(report => {
		// 		console.log('SUCCESS!!!!!!!!!!!!!!!!!!!!!:', report);
		// 		// dispatch({
		// 		// 	type: CREATE_REPORT,
		// 		// 	payload: report
		// 		// });
		// 		dispatch(fetchingFalse)
		// 	})
	}
	// we want fetch
	// dispatch all the goods
};

