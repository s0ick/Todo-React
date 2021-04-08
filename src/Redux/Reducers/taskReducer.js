const TASK = 'Task/TASK',
      PUSH_TASKS = 'Task/PUSH_TASKS',
      DELETE_TASK = 'Task/DELETE_TASK',
      UPDATE_COMPLETED = 'Task/UPDATE_COMPLETED';

let initial = {
  tasks: []
};

const taskReducer = (state = initial, action) => {
  switch(action.type) {
    case TASK:
      return { ...state,
        tasks: [...state.tasks, {
          id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 0,
          message: action.task,
          completed: false,
          dateCompleted: null
        }]
      };

    case PUSH_TASKS:
      return {...state,
        tasks: action.array
      };  

    case DELETE_TASK:
      return {...state,
        tasks: state.tasks.filter(t => t.id !== action.id)
      };
      
    case UPDATE_COMPLETED:
      return {...state,
        tasks: state.tasks.map(t => {
          if(t.id === action.id) return {...t, completed: !t.completed, dateCompleted: new Date()};
          return t;
        })
      };  

     default: return state; 
  }
}

// ACTION CREATORS
export const setTask = (task) => ({type: TASK, task});
export const pushTasks = (array) => ({type: PUSH_TASKS, array});
export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const updateCompleted = (id) => ({type: UPDATE_COMPLETED, id});


export default taskReducer;