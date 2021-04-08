import React from 'react';
import style from '../ActiveList/ActiveList.module.css';
import Task from '../ActiveList/Task/Task';
import PieChart from '../common/PieChart/PieChart';
import BarChart from '../common/BarChart/BarChart';

const CompleteList = React.memo((props) => {
  return (
    <div className={style.block}>
      <div className={style.listComplete}>
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
      <div className={style.panel}>
        <div className={style.slick}>

          <div className={style.pie}>
            <h2 className={style.title}>Ratio of completed and unfulfilled tasks</h2>
            <PieChart data={props.tasks} />
          </div>

          <div className={style.bar}>
            <h2 className={style.title}>Number of completed tasks for the current week</h2>
            <BarChart data={props.tasks} />
          </div>
          
        </div>
      </div>
    </div>
  )
});

export default CompleteList;