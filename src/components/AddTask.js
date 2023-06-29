import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim() !== '') {
      const newTask = {
        id: new Date().getTime(),
        description: description.trim(),
        isDone: false,
      };

      dispatch(addTask(newTask));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};
export default AddTask;