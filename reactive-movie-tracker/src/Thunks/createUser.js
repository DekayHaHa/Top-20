import { isLoading, hasError } from '../actions'
import { signIn } from './signIn'

export const createUser = ( userInfo ) => {
	return async (dispatch) => {
		const url = "http://localhost:3000/api/users/new";
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
			dispatch(signIn(userInfo))
		} catch (error) {
			dispatch(hasError(error.message))
		}
	}
}





// try {
// 	const response = await fetch(url, {
// 		method: "POST",
// 		body: JSON.stringify(userInfo),
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	});
// 	const data = await response.json();
// 	if (data.error) {
// 		this.setState({ error: "That email is already taken" });
// 	} else {
// 		await this.props.signInUser(data.id, this.state.name);
// 	}
// } catch (error) {
// 	this.setState(
// 		{
// 			error: `Could Not Create a New User at This Time.`
// 		},
// 	);
// }