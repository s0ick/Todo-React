import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Components/common/Preloader/Preloader';

const ActiveList = React.lazy(() => import('../Components/ActiveList/ActiveList'));
const CompleteList = React.lazy(() => import('../Components/ActiveList/CompleteList'));

const Routes = (props) => {
  return (
    <div className="app-wrapper-content">
      <Suspense fallback={<Preloader/>}>
        <Route path='/tasks' render={() => <ActiveList 
          tasks={props.tasks}
          createTask={props.createTask}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />} />
        <Route path='/completed' render={() => <CompleteList 
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />} />
      </Suspense>
      <Redirect to='/tasks' />
    </div>
  )
};

export default Routes; 