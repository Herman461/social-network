import React from 'react';
import { useFormik } from 'formik';

const AddMessageForm = (props) => {
   const formik = useFormik({
      initialValues: {
         message: ''
      },
      onSubmit(values, actions) {
         props.sendMessage(values.message);
         actions.resetForm();
      }
   });

   return (
      <form onSubmit={formik.handleSubmit} className="dialogs__form form-dialogs">
         <textarea
            value={formik.values.message}
            onChange={formik.handleChange}
            name="message"
            className="form-dialogs__textarea"
         />
         <button type="submit" onClick={formik.handleSubmit} className="form-dialogs__button">
            Отправить
         </button>
      </form>
   );
};

export default AddMessageForm;
