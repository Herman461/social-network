import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { authThunkCreator, logoutThunkCreator } from '../redux/thunks';

import Header from './Header';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authThunkCreator(); 	
	}
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { authThunkCreator, logoutThunkCreator })(HeaderContainer);