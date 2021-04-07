import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Preloader from '../Components/common/Preloader/Preloader';

const ActiveList = React.lazy(() => import('../Components/ActiveList/ActiveList'));
const CompleteList = React.lazy(() => import('../Components/CompleteList/CompleteList'));

const Routes = (props) => {
  return (
    <div className="app-wrapper-content">
      <Suspense fallback={<Preloader/>}>
        <Route path='/tasks' render={() => <ActiveList />} />
        <Route path='/completed' render={() => <CompleteList />} />
      </Suspense>
    </div>
  )
};

export default Routes; 