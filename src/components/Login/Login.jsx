import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import SignupForm from './SignupForm';

const Login = (props) => {
	//! здесь пришел id == undefined на втором вызове, когда мы непосредственно получили ответ на
	//  успешную регистрацию, хотя isAuth == true
	if (props.isAuth) {
		return <Redirect to={'/profile/' + props.id} />
	}

	return (
		<div className="login">
			<div className="login__title">Login</div>
			<LoginForm loginThunkCreator={props.loginThunkCreator} message={props.message} />
			
			<a href="" onClick={e => props.toggleSignupForm(e)} className="login__open-reg-form">
				Create New Account
			</a>
			<SignupForm 
				toggleSignupForm={props.toggleSignupForm} 
				showSignupForm={props.showSignupForm}
				registerThunkCreator={props.registerThunkCreator}
			/>
		</div>
	);
}

export default Login;