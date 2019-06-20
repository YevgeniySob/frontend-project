import { combineReducers } from "redux";
import userReducer from './userReducer'
import reportReducer from './reportReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
	userReducer,
	reportReducer,
	modalReducer
});

export default rootReducer
