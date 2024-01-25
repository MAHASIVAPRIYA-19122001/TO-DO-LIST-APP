import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle the task value
    if (taskInput.trim() !== '') {
      addTask(taskInput); // Pass the taskInput as a string
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;

