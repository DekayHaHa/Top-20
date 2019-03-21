export const cleanMovies = (movies) => {
	return movies.map(val => {
		return { 
			title: val.title,
			image: `https://image.tmdb.org/t/p/w500${val.backdrop_path}`,
			overview: val.overview,
			score: val.vote_average,
			id: val.id,
		}
	})
}