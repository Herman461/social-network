import React from 'react';
import { useField } from 'formik';


const LoginInput = (props) => {
	const [field, meta] = useField(props.name);
	const hasError = meta.error && meta.touched;
	const hasMessage = props.message ? true : false;
	
	return (
		<div className="login__item item-login">
			{props.label ? <label className="item-login__label" htmlFor={field.name}>{props.label}</label> : null}
			<div className="item-login__input">
				{hasError ? <div className="error">{meta.error}</div> : null}
				<input value={props.value} onChange={props.handleChange} className={`input${hasError || hasMessage ? " _error" : ""}`} {...field} type="text" placeholder={props.placeholder} onChange={props.handleChange} />
			</div>
		</div>
	);
}

export default LoginInput;