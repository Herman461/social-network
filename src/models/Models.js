import * as yup from 'yup';
import * as axios from 'axios';


export const SignupSchema = yup.object().shape({
	username: yup.string()
		.min(3, 'Слишком мало символов')
		.max(16, 'Слишком много символов')
		.required('Логин должен быть указан')
		.test('Unique Username', 'Username already in use', function(value) {
			return new Promise((resolve, reject) => {
				axios.post('http://localhost:4000/api/auth/login/validUsername', { username: value })
				.then(res => {
					if (res.data.message) {
						resolve(false)
					}
					resolve(true);
				})
			}) 
		}),
	password: yup.string()
		.min(3, 'Слишком мало символов')
		.max(16, 'Слишком много символов')
		.required('Пароль должен быть указан')
		// .test('Valid Password', 'The password is incorrect', function(value) {
		// 	return new Promise((resolve, reject) => {
		// 		axios.post('http://localhost:4000/api/auth/login/validPassword', { password: value })
		// 		.then(res => {
		// 			// debugger;
		// 			if (res.data.message) {
		// 				resolve(false)
		// 			}
		// 			resolve(true);
		// 		})
		// 	}) 
		// }),
});


// export const LoginSchema = yup.object().shape({
// 	username: yup.string()
// 		.min(3, 'Слишком мало символов')
// 		.max(16, 'Слишком много символов')
// 		.required('Логин должен быть указан'),
// 	password: yup.string()
// 		.min(3, 'Слишком мало символов')
// 		.max(16, 'Слишком много символов')
// 		.required('Пароль должен быть указан')
// });

export const MessageSchema = yup.object().shape({
   message: yup.string()
               .min(3, 'Слишком мало символов!')
               .max(12, 'Слишком много символов!') // min - max - включительно
               .required('Это поле обязательно!')
});

export const PostSchema = yup.object().shape({
	newPostText: yup.string()
		.min(3, 'Слишком мало символов!')
		.max(12, 'Слишком много символов!')
		.required('Это поле обязательно!')
});
