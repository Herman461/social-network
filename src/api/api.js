import * as axios from 'axios';

const instance = axios.create({
	baseURL: "http://localhost:4000/",
	withCredentials: true
});


export const usersAPI = {
	toggleFollow(userId, followed) {
		return instance.put('api/follow/' + userId, { followed: !followed }).then(response => response.data);
	},
	getUsers() {
		return instance.get("api/users").then(response => response.data);
	},
	getUserProfile(userId) {
		return instance.get('api/profile').then(response => response.data);
	},
	getPages(pageSize, page) {
		return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
	},
	getStatus(userId, status) {
		return instance.put('api/profile/status/' + userId, { status }).then(response => response.data);
	}
};

export const authAPI = {
	getAuth() {
		return instance.get('api/auth/me').then(response => response.data);
	},
	login(username, password) {
		return instance.post('api/auth/login', { username, password }).then(response => response.data);
	},
	logout() {
		return instance.delete('api/auth/login').then(response => response.data);
	},
	register(username, password) {
		return instance.post('api/register', { username, password }).then(response => response.data);
	}
}