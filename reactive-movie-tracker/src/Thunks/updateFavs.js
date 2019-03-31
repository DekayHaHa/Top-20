import { isLoading, hasError, addMovies } from '../actions'
import { cleanFavorites, adjustIsFavorite } from '../utilities/cleaner'

export const updateFavs = (id, movies) => {
	return async (dispatch) => {
  const url = `http://localhost:3000/api/users/${id}/favorites`
		try {
			dispatch(isLoading(true))
			const response = await fetch(url)
			if (!response.ok) {
				throw Error(response.statusText)
			}
			dispatch(isLoading(false))
			const results = await response.json();
			const favIds = cleanFavorites(results.data)
			const finalData = adjustIsFavorite(favIds, movies)
			dispatch(addMovies(finalData))
		} catch (error) {
			dispatch(hasError(error.message))
		}
	}
}
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw Error(response.statusText);
//     } else {
//       const data = await response.json();
//       return await cleanFavorites(data.data);
//     }
//   } catch (error) {
//     return error.message || error
//   }