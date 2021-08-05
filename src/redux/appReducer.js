import { INITIALIZED_SUCCESS } from './actions';

const initialState = {
	initialized: false
};


export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}