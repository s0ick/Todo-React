import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { connect } from 'react-redux';

import store from './Redux/store';
import { setInitializedSuccess } from './Redux/Reducers/appReducer';
import { getTasks } from './Redux/Reducers/taskReducer';

import Preloader from './Components/common/Preloader/Preloader';
import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
import './App.css';

const App = () => {
  componentWillMount() {
    this.props.getTasks();
  }
  componentDidMount() {
    this.props.setInitializedSuccess();
  }

  render () {
    if(this.props.initialized) {
      return (
        <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-hero">
            <Routes />
          </div>
        </div>
      )
    } else {
      return (
        <div className="app-wrapper">
          <Preloader />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

let AppContainer = compose(
  connect(mapStateToProps, { setInitializedSuccess, getTasks }),
)(App);

export const TodoListApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}
