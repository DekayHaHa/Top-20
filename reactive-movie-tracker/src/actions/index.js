export const addMovies = (movies) => ({
	type: 'ADD_MOVIES',
	movies
})

export const signInUser = (id, name) => ({
	type: 'SIGNIN_USER',
	name,
	id
})

export const signOutUser = () => ({
	type: 'SIGN_OUT_USER',
})

export const isLoading = (bool) => ({
	type: 'IS_LOADING',
	isLoading: bool
})

export const hasError = (message) => ({
	type: 'HAS_ERROR',
	message
})