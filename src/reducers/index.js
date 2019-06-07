import { combineReducers } from "redux";
import userReducer from './userReducer'
import reportReducer from './reportReducer'
import addressReducer from './addressReducer'

const rootReducer = combineReducers({
	userReducer,
	reportReducer,
	addressReducer
});

export default rootReducer
