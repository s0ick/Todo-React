import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Preloader from '../Components/common/Preloader/Preloader';

const ActiveListContainer = React.lazy(() => import('../Components/ActiveList/ActiveListContainer'));
const CompleteListContainer = React.lazy(() => import('../Components/CompleteList/CompleteListContainer'));

const Routes = (props) => {
  return (
    <div className="app-wrapper-content">
      <Suspense fallback={<Preloader/>}>
        <Route path='/tasks' render={() => <ActiveListContainer />} />
        <Route path='/completed' render={() => <CompleteListContainer />} />
      </Suspense>
    </div>
  )
};

export default Routes; 