import { SET_USER_DATA, SET_MESSAGE } from './actions';

const initialState = {
	user: {
		id: null,
		username: null
	},
	isAuth: false,
	message: ""
}
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				user: { ...action.user },
				isAuth: action.isAuth
			}
		case SET_MESSAGE:
			return {
				...state,
				message: action.message
			}
		default:
			return state;
	}
}