import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TaskAPI } from './API/api';
import { Provider } from 'react-redux';
import store from './Redux/store';

import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
import Preloader from './Components/common/Preloader/Preloader';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      if(fetching) {
        const response = await TaskAPI.getTasks();
        if(response.status === 200) {
          setTasks(response.data);
          setFetching(false);
        }
      }
    };
    getTasks();
  }, [fetching]);

  const createTask = async (task) => {
    const response = await TaskAPI.createTask(task);

    if(response.status === 201) {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = async (id) => {
    const response = await TaskAPI.deleteTask(id);

    if(response.status === 200) {
      let array = tasks.filter(t => t.id !== id);
      setTasks(array);
    }
  };

  const updateTask = async (id, task) => {
    const response = await TaskAPI.updateTask(id, task);

    if(response.status === 200) {
      setTasks(tasks.map(t => {
        if(t.id === id) return task;
        return t;
      }));
    }
  };

  if(fetching) {
    return (<><Preloader /></>)
  } else {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-hero">
          <Routes 
            tasks={tasks}
            createTask={createTask} 
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
      </div>
    )
  }
}


export const TodoListApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
