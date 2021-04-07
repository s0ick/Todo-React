import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './Reducers/appReducer';
import taskReducer from './Reducers/taskReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  app: appReducer,
  task: taskReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;