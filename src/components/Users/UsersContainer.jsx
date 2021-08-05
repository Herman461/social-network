import React from 'react';
import { connect } from 'react-redux';


import Users from './Users';
import { getSearchText, getTotalUsersCount, getFilteredUsers, 
	getIsFetching, getFollowingInProgress} from '../../redux/selectors/usersSelectors';
import { getUsersThunkCreator, toggleFollowThunkCreator } from '../../redux/thunks';
import {
	filterUsers, 
	updateUsersSearch,
	setSelectedPage
} from '../../redux/actions';



class UsersComponent extends React.Component {
	componentDidMount() {	
		this.props.getUsersThunkCreator();
		// axios.post('http://localhost:4000/api/register', { username: "Hdadlasdsdsdasasan", password: "123" }).then(response => {
		// 	debugger;
		// })
	}

	render() {
		return <Users {...this.props} />;
	} 

};


const mapStateToProps = (state) => ({
	searchText: getSearchText(state),
	totalUsersCount: getTotalUsersCount(state),
	filteredUsers: getFilteredUsers(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
});

const UsersContainer = connect(mapStateToProps,
{ filterUsers, updateUsersSearch, getUsersThunkCreator, toggleFollowThunkCreator })(UsersComponent);

export default UsersContainer;