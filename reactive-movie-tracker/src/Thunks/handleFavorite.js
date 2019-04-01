import { isLoading, hasError } from '../actions'

export const handleFavorite = (method, movieInfo, url) => {
	return async (dispatch) => {
		try {
			dispatch(isLoading(true))
			const response = await fetch(url, {
				method,
				body: JSON.stringify(movieInfo),
				headers: {
					"Content-Type": "application/json"
				}
			})
			if (!response.ok) {
				throw Error(response.statusText)
			}
			dispatch(isLoading(false))
		} catch (error) {
			dispatch(hasError(error.message))
		}
	}
}