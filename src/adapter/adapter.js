const API_URL = "http://localhost:3000"

const get = url => {
	return fetch(url).then(r => r.json())
};

const adapter = {
	getReports: (state) => get(`${API_URL}/report_by_state?id=${staate}`)
};

export const getReports = reports => {

	return {
		type: GET_REPORTS,
		payload: {
			reports
		}
	}
};
import {GET_REPORTS} from "../actions/types";

export const getReports = (state) => {
	return (dispatch) => {
		return adapter.getReports(state)
			.then(reports => {
				dispatch({
					type:    GET_REPORTS,
					payload: {
						reports
					}
				})
			})
	}
};
