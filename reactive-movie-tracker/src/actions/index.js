export const addMovies = (movies) => ({
	type: 'ADD_MOVIES',
	movies
})

export const updateUser = (id, name) => ({
	type: 'UPDATE_USER',
	name,
	id,
})