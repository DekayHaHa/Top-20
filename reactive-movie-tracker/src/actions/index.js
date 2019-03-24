export const addMovies = (movies) => ({
	type: 'ADD_MOVIES',
	movies
})

export const signInUser = (id, name) => ({
	type: 'SIGNIN_USER',
	name,
	id
})

export const addFavorites = (movies) => ({
	type: 'ADD_FAVORITES',
	movies
})

