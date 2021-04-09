import * as Axios from 'axios';

const API_BASE_URL = 'http://localhost:3004';

export const TaskAPI = {

  createTask(tasks) {
    const url = `${API_BASE_URL}/data`;
    return Axios.post(url, tasks);
  },

  getTasks() {
    const url = `${API_BASE_URL}/data`;
    return Axios
      .get(url)
      .then(response => response);
  },

  deleteTask(id) {
    const url = `${API_BASE_URL}/data/${id}`;
    return Axios.delete(url);
  },

  updateTask(id, task) {
    const url = `${API_BASE_URL}/data/${id}`;
    return Axios
      .put(url, task)
      .then(response => response);
  },

};