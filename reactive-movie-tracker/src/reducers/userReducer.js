export const signInReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SIGNIN_USER':
			const { id, name } = action;
			return { id, name}
		default:
			return state
	}
}