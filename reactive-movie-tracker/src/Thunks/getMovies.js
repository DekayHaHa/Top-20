import { isLoading, hasError, addMovies } from '../actions'
import { cleanMovies } from '../utilities/cleaner'
import { APIkey } from "../utilities/key.js";

export const getMovies = () => {
	return async (dispatch) => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`;
		try {
			dispatch(isLoading(true))
			const response = await fetch(url)
			if (!response.ok) {
				throw Error(response.statusText)
			}
			dispatch(isLoading(false))
			const data = await response.json()
			const finalData = cleanMovies(data.results);
			dispatch(addMovies(finalData))
		} catch (error) {
			dispatch(hasError(error.message))
		}
	}
}