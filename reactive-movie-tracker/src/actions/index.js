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
	type: 'SIGN_OUT_USer',
})
