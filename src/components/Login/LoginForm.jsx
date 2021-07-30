import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';


const LoginSchema = yup.object().shape({
	login: yup.string()
		.min(3, 'Слишком мало символов')
		.max(12, 'Слишком много символов')
		.required('Логин должен быть указан'),
	password: yup.string()
		.min(3, 'Слишком мало символов')
		.max(12, 'Слишком много символов')
		.required('Пароль должен быть указан')
});

const LoginForm = () => {
	return (
		<Formik
			initialValues={{
				login: '',
				password: ''
			}}
			onSubmit={values => {
				console.log(values);
			}}
			validationSchema={LoginSchema}
		>
		{props =>
			<form className="login__form form-login" onSubmit={props.handleSubmit} action="#">
				<label className="form-login__label" htmlFor="login">Введите ваше имя</label>
				<ErrorMessage name="login" render={msg => <div className="error">{msg}</div>} />
				<div className="form-login__input">
					<Field className="input" name="login" type="text" onChange={props.handleChange} />
				</div>
				<label className="form-login__label" htmlFor="password">Введите ваш пароль</label>
				<ErrorMessage name="password" render={msg => <div className="error">{msg}</div>} />
				<div className="form-login__input">
					<Field className="input" name="password" type="text" onChange={props.handleChange} />
				</div>
				<button className="form-login__btn" type="submit">Войти</button>
			</form>
		}
		</Formik>
	);
};


export default LoginForm;