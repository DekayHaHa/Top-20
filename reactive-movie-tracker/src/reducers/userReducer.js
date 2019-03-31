export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SIGNIN_USER':
			const { id, name } = action;
			return { id, name}
		case 'SIGN_OUT_USER':
			return { id: 0, name: ''}
		default:
			return state
	}
}