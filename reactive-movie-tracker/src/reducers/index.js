import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer'
import { signInReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';

export const rootReducer = combineReducers({
	movies: moviesReducer,
	activeUser: signInReducer,
	favorites: favoritesReducer
})