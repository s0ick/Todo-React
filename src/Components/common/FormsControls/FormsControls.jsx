import React from 'react';
import style from './FormControls.module.css';

const FormControl = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={style.FormControl + " " + (hasError ? style.error : "")}>
      {props.children}
      <span className={style.spanError}>{error} <i className={style.ellipse}></i></span>
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}>
           <textarea {...input} {...restProps}></textarea> 
         </FormControl>
};


