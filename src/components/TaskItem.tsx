import React from 'react';
import { useAppDispatch } from '../hooks';
import { editTask, deleteTask } from '../store/reducers/tasksSlice';
import ITask from '../models/ITask'

interface Props {
    task: ITask
}

const TaskItem = ({ task }: Props) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(editTask(task));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <span style={{border: '2px solid red', margin: '10px'}}>{task.title}</span>
      <span style={{border: '2px solid green', margin: '10px'}}>{task.description}</span>
      <span style={{border: '2px solid blue', margin: '10px'}}>{task.priority}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;