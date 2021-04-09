import React from 'react';
import style from './addForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthAC } from '../../../Utils/validators';

const maxLength = maxLengthAC(300);

const AddTask = ({handleSubmit}) => {
 return (
  <form onSubmit={handleSubmit} className={style.panel}>
    <Field component={Textarea} 
          name={"message"} 
          placeholder='New task' 
          className={style.textarea}
          type={"text"}
          autoComplete={"off"}
          validate={[required, maxLength]}
    />
    <button className={style.button}>add</button>
  </form>
 )
};

export default reduxForm({form: 'addTask'})(AddTask);