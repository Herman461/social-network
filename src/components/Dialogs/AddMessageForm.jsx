import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const MessageSchema = yup.object().shape({
   message: yup.string()
               .min(3, 'Слишком мало символов!')
               .max(12, 'Слишком много символов!') // min - max - включительно
               .required('Это поле обязательно!')
});
const AddMessageForm = (props) => {
   return (
         <Formik
            initialValues={{
               message: ''
            }}
            onSubmit={(values, actions) => {
               props.sendMessage(values.message);
               actions.resetForm();
            }}
            validationSchema={MessageSchema}
         >
         {props =>
            <form onSubmit={props.handleSubmit} className="dialogs__form form-dialogs">
               <ErrorMessage name="message" render={msg => <div className="error">{msg}</div>} />
               <Field
                  as="textarea"
                  value={props.values.message}
                  onChange={props.handleChange}
                  name="message"
                  className="form-dialogs__textarea"
               />
               <button type="submit" onClick={props.handleSubmit} className="form-dialogs__button">
                  Отправить
               </button>
            </form>
         }
         </Formik>
   );
};

export default AddMessageForm;
