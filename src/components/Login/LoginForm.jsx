import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import LoginInput from './LoginInput';

const LoginForm = (props) => {
	const message = props.message;
	return (
		<>
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				onSubmit={(formData, actions) => {
					props.loginThunkCreator(formData.username, formData.password, actions.setErrors);
				
				}}
			>
			{props =>
				<form className="login__form form-login" onSubmit={props.handleSubmit} action="#">
					<LoginInput 
						label="Введите ваше имя" 
						name="username"
						handleChange={props.handleChange}
						value={props.values.username}
						message={message}
					/>
					<LoginInput 
						label="Введите ваш пароль" 
						name="password"
						handleChange={props.handleChange}
						value={props.values.password}
						message={message}
					/>
					<button className="form-login__btn" type="submit">Войти</button>
				</form>
			}

			</Formik>
			{message ? <div className="error">{message}</div> : null}
		</>
	);
};


export default LoginForm;