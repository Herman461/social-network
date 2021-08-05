import * as axios from 'axios';
import { 
	toggleIsFetching, setUsers, setTotalUsersCount,
	toggleFollowingProgress, toggleFollow, 
	setAuthUserData, setUserProfile, setStatus, setMessage, initializedSuccess} from './actions';
import { usersAPI, authAPI } from '../api/api';

export const getUsersThunkCreator = () => (dispatch) => {
	dispatch(toggleIsFetching());
	usersAPI.getUsers().then(data => {
		dispatch(toggleIsFetching());
		dispatch(setUsers(data.items));
		// dispatch(setTotalUsersCount(data.totalCount));
	});
};

export const toggleFollowThunkCreator = (userId, followed) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.toggleFollow(userId, followed)
	.then(data => {
		dispatch(toggleFollowingProgress(false, userId));
	 	if (data.resultCode === 0) {
			dispatch(toggleFollow(userId));
		 }	
	});	
};

export const getProfileThunkCreator = (userId) => (dispatch) => {
	usersAPI.getUserProfile(userId).then(data => {
		dispatch(setUserProfile(data.profile));
	});
};

export const setStatusThunkCreator = (userId, status) => (dispatch) => {
	usersAPI.getStatus(userId, status).then(data => {
		dispatch(setStatus(data.status))
	});
}


export const authThunkCreator = () => (dispatch) => {
	return authAPI.getAuth().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(data.user, true));
		}
	});
}

export const loginThunkCreator = (username, password) => (dispatch) => {

	authAPI.login(username, password).then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(data.user, true));
		} else {
			dispatch(setMessage(data.message))
		}
	});
}

export const registerThunkCreator = (username, password) => (dispatch) => {
	authAPI.register(username, password).then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(data.user, true));
		}
	});
}

export const logoutThunkCreator = (username, password) => (dispatch) => {
	authAPI.logout(username, password).then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, false));
		}
	});
}

export const initializeApp = () => (dispatch) => {
	dispatch(authThunkCreator()).then(() => dispatch(initializedSuccess()))
}

