import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { authThunkCreator, logoutThunkCreator } from '../redux/thunks';
import { getUser, getIsAuth } from '../redux/selectors/authSelectors';

import Header from './Header';

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	user: getUser(state),
	isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, { authThunkCreator, logoutThunkCreator })(HeaderContainer);