export const cleanMovies = (movies) => {
	return movies.map(val => {
		return { 
			title: val.title,
			image: `https://image.tmdb.org/t/p/w500${val.poster_path}`,
			overview: val.overview,
			score: val.vote_average,
			id: val.id,
			isFavorite: false, 
			releaseDate: val.release_date
		}
	})
}

export const cleanFavorites = (movies) => movies.map(val => val.movie_id)

export const adjustIsFavorite = (favIds, movies) => {
	return movies.map(movie => {
      return favIds.includes(movie.id)
        ? { ...movie, isFavorite: true }
        : { ...movie, isFavorite: false };
    });
}