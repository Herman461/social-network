import React from 'react';
import { registerThunkCreator, loginThunkCreator } from '../../redux/thunks';
import { connect } from 'react-redux';
import Login from './Login';


class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSignupForm: false
		}
	}

	toggleSignupForm = (e) => {
		e.preventDefault();
		this.setState(state => {
			return {
				showSignupForm: !state.showSignupForm
			}
		})
	}

	render() {
		return (
			<Login {...this.props} showSignupForm={this.state.showSignupForm} toggleSignupForm={this.toggleSignupForm} />
		);	
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	id: state.auth.user.id,
	message: state.auth.message
});
export default connect(mapStateToProps, { registerThunkCreator, loginThunkCreator })(LoginContainer);