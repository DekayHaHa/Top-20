export const userReducer = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_USER':
			const { id, name } = action;
			return { id, name }
		default:
			return state

	}
}