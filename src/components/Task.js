import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions'

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = (e) => {
    const updatedDescription = e.target.value.trim();
    dispatch(editTask(task.id, updatedDescription));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      <input
        type="text"
        value={task.description}
        onChange={handleEditTask}
      />
    </li>
  );
};

export default Task;
