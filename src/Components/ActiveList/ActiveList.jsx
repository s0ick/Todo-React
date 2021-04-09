import React, { useState, useEffect } from 'react';
import { reset } from "redux-form";
import style from './ActiveList.module.css';
import Task from './Task/Task';
import AddForm from './Form/AddForm';

const ActiveList = React.memo((props) => {
  const [tasks, setS]

  const onSubmit = (formData, dispatch) => {
    const { message } = formData;

    let task = {
      id: props.tasks.length ?
          props.tasks[props.tasks.length - 1].id + 1 : 0,
      message,
      completed: false,
      dateCompleted: null
    };

    dispatch(reset('addTask'));
    props.createTask(task);
  };

  return (
    <div className={style.container}>
      <AddForm onSubmit={onSubmit}/>
      <div className={style.list}>
        {
          props.tasks.length ? 
            props.tasks.map(t => {
              if(!t.completed) {
                return <Task 
                  key={`task_id_${t.id}`} 
                  message={t.message} 
                  id={t.id}
                  completed={t.completed}
                  deleteTask={props.deleteTask}
                  updateTask={props.updateTask}
                />
              }
            }) :
            <h2 className={style.subtitle}>The task list is empty</h2>
        }
      </div>
    </div>
  )
});

export default ActiveList;