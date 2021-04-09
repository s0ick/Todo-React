import React, { useEffect, useState }  from 'react';
import style from '../ActiveList/ActiveList.module.css';
import Task from '../ActiveList/Task/Task';
import PieChart from '../common/PieChart/PieChart';
import BarChart from '../common/BarChart/BarChart';

const CompleteList = React.memo((props) => {

  const [check, setCheck] = useState(false);

  
  useEffect(() => {
    setCheck(false);
    props.tasks.forEach((elem) => {
      if(elem.completed) setCheck(true);
    });

    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(props.tasks));
  }, [props.tasks, check]);

  return (
    <div className={style.block}>
      <div className={style.listComplete}>
        {
          check ?
            props.tasks.map(t => {
              if(t.completed) {
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
            <h2 className={style.subtitle}>The list of completed tasks is empty</h2>
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