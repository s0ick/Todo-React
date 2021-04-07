import React from 'react';
import style from '../ActiveList/ActiveList.module.css';
import Task from '../ActiveList/Task/Task';

const CompleteList = React.memo((props) => {
  return (
    <div className={style.container}>
      <div className={style.list}>
        {
          props.tasks && 
            props.tasks.map(t => {
              if(t.completed) {
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

export default CompleteList;