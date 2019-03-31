import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer'
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './errorReducer'

export const rootReducer = combineReducers({
	movies: moviesReducer,
	activeUser: userReducer,
	isLoading: loadingReducer,
	error: errorReducer
})