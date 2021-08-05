export const getSearchText = (state) => {
	return state.usersPage.text;
}

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
}

export const getFilteredUsers = (state) => {
	return state.usersPage.filteredUsers;
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}

export const getSelectedPage = (state) => {
	return state.usersPage.selectedPage;
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
}

export const getPageNeighbours = (state) => {
	return state.usersPage.pageNeighbours;
}
