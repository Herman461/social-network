import React from 'react';
import { useFormik } from 'formik';

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			login: '',
			password: ''
		},
		onSubmit: values => {
			console.log(values);
		}
	});
	return (
		<form className="login__form form-login" onSubmit={formik.handleSubmit} action="#">
			<label className="form-login__label" htmlFor="login">Введите ваше имя</label>
			<div className="form-login__input">
				<input className="input" name="login" type="text" onChange={formik.handleChange} />
			</div>
			<label className="form-login__label" htmlFor="password">Введите ваш пароль</label>
			<div className="form-login__input">
				<input className="input" name="password" type="text" onChange={formik.handleChange} />
			</div>
			<button className="form-login__btn" type="submit">Войти</button>
		</form>
	);
};


export default LoginForm;