import ActiveList from './ActiveList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteTask, updateTask, createTask } from '../../Redux/Reducers/taskReducer';

let mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks
  };
};

export default compose(
  connect(mapStateToProps, { deleteTask, updateTask, createTask })
)(ActiveList);