import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import smile from '../../assets/img/icons/smile.svg';
import camera from '../../assets/img/icons/camera.png';
import music from '../../assets/img/icons/music.png';
import micro from '../../assets/img/icons/micro.png';


const PostSchema = yup.object().shape({
	newPostText: yup.string()
		.min(3, 'Слишком мало символов!')
		.max(12, 'Слишком много символов!')
		.required('Это поле обязательно!')
});

const AddPostForm = (props) => {
	return (
        <Formik
            initialValues={{
               newPostText: ""
            }}
            onSubmit={(values, actions) => {
                props.addPost(values.newPostText);
                actions.resetForm();
            }}
            validationSchema={PostSchema}
         >
         {props => (
            <form className="user-info__new-post new-post">
               <ErrorMessage name="newPostText" render={msg => <div className="error">{msg}</div>} />
               <div className="new-post__body">
                  <Field
                     placeholder="Создать новый пост..."
                     className="new-post__message"
                     name="newPostText"
                     as="textarea"
                     value={props.values.newPostText}
                     onChange={props.handleChange} />
                  <button type="submit" onClick={props.handleSubmit} className="new-post__button">
                    Добавить пост
                  </button>
                  <ul className="new-post__actions">
                    <li className="new-post__action">
                       <img src={smile} />
                     </li>
                     <li className="new-post__action">
                        <img src={camera} />
                     </li>
                     <li className="new-post__action">
                        <img src={music} />
                     </li>
                     <li className="new-post__action">
                        <img src={micro} />
                     </li>
                  </ul>
               </div>
            </form>
         )}
         </Formik>
	);
};

export default AddPostForm;