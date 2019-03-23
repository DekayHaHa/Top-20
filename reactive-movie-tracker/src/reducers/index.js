import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer'
import { signInReducer } from './userReducer';

export const rootReducer = combineReducers({
	movies: moviesReducer,
	activeUser: signInReducer
})