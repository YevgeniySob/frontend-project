import { combineReducers } from "redux";
import userReducer from './userReducer'
import reportReducer from './reportReducer'

const rootReducer = combineReducers({
	userReducer,
	reportReducer
});

export default rootReducer
