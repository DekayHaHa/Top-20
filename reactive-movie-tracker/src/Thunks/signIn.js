import { isLoading, hasError, signInUser } from '../actions'

export const signIn = (userInfo) => {
	return async (dispatch) => {
		const url = "http://localhost:3000/api/users";
		try {
			dispatch(isLoading(true))
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(userInfo),
				headers: {
					"Content-Type": "application/json"
				}
			})
			if (!response.ok) {
				throw Error(response.statusText)
			}
			dispatch(isLoading(false))
			const data = await response.json();
			dispatch(signInUser(data.data.id, data.data.name))
		} catch (error) {
			dispatch(hasError(error.message))
		}
	}
}