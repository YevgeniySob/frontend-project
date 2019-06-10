import { combineReducers } from "redux";
import userReducer from './userReducer'
import commentReducer from './commentReducer'
import reportReducer from './reportReducer'

const rootReducer = combineReducers({
	userReducer,
	reportReducer,
	commentReducer
});

export default rootReducer
