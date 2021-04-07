import React from 'react';
import { reset } from "redux-form";
import style from './ActiveList.module.css';
import Task from './Task/Task';
import AddForm from './Form/AddForm';

const ActiveList = React.memo((props) => {
  const onSubmit = (formData, dispatch) => {
    const { message } = formData;
    props.setTask(message);
    dispatch(reset('addTask'));
  };

  return (
    <div className={style.container}>
      <AddForm onSubmit={onSubmit}/>
      <div className={style.list}>
        {
          props.tasks && 
            props.tasks.map(t => {
              if(!t.completed) {
                return <Task 
                  key={`task_id_${t.id}`} 
                  message={t.message} 
                  id={t.id}
                  deleteTask={props.deleteTask}
                  updateCompleted={props.updateCompleted} 
                />
              }
            })
        }
      </div>
    </div>
  )
});

export default ActiveList;