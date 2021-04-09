import { TaskAPI } from '../../API/api';

const TASK = 'Task/TASK',
      PUSH_TASKS = 'Task/PUSH_TASKS';

let initial = {
  tasks: []
};

const taskReducer = (state = initial, action) => {
  switch(action.type) {
    case TASK:
      return { ...state,
        tasks: [...state.tasks, action.task]
      };

    case PUSH_TASKS:
      return {...state,
        tasks: action.array
      };  
      
     default: return state; 
  }
};

// ACTION CREATORS
export const setTask = (task) => ({type: TASK, task});
export const pushTasks = (array) => ({type: PUSH_TASKS, array});


// THUNK CREATORS
export const createTask = (tasks) => async (dispatch) => {
  const response = await TaskAPI.createTask(tasks);

  if(response.status === 201) {
    dispatch(setTask(response.data));
  }
};

export const getTasks = () => async (dispatch) => {
  const response = await TaskAPI.getTasks();

  if(response.status === 200) {
    dispatch(pushTasks(response.data));
  }
};

export const deleteTask = (id) => async (dispatch) => {
  const response = await TaskAPI.deleteTask(id);

  if(response.status === 200) {
    dispatch(getTasks());
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  const response = await TaskAPI.updateTask(id, task);

  if(response.status === 200) {
    dispatch(getTasks());
  }
};


export default taskReducer;