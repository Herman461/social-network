import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import LoginInput from './LoginInput';

import { SignupSchema } from '../../models/Models';
const SignupForm = (props) => {
	return (
		<div className={`signup ${props.showSignupForm ? '_active' : ''}`}>
			<div className="signup__body">
				<div className="signup__content">
					<div className="signup__title">Sign up</div>
					<div className="signup__close" onClick={e => props.toggleSignupForm(e)}><span></span></div>
					<Formik
						initialValues={{
							username: '',
							password: ''
						}}
						onSubmit={(formData, actions) => {
							props.registerThunkCreator(formData.username, formData.password, actions.setStatus);
						}}
						validationSchema={SignupSchema}
					>
						{props =>
							<form className="signup__form form-signup">
								<LoginInput 
									value={props.values.username} 
									handleChange={props.handleChange} 
									name="username" 
									placeholder="username"
								/>
								<LoginInput
								 	value={props.values.password}
									handleChange={props.handleChange} 
									name="password"
									placeholder="password" />
								<button onClick={props.handleSubmit} className="form-signup__button" type="submit">Sing up</button>
							</form>
						}
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default SignupForm;