import { isLoading, hasError, addMovies } from '../actions'
import { cleanMovies } from '../utilities/cleaner'

export const getMovies = (url) => {
	return async (dispatch) => {
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