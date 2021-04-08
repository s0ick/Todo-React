import React from 'react';
import style from './Task.module.css';
import done from '../../../assets/done.svg';
import remove from '../../../assets/delete.svg';

const Task = (props) => {
  return (
    <div className={style.item}>
      <p className={style.message}>
        {props.message}
      </p>
      <div className={style.panel}>
        <button onClick={() => props.updateCompleted(props.id)} className={style.complete}>
          <img className={style.icon} src={done} alt="delete"/>
        </button>
        <button onClick={() => props.deleteTask(props.id)} className={style.remove}>
          <img className={style.icon} src={remove} alt="done"/>
        </button>
      </div>
    </div>
  )
};

export default Task;