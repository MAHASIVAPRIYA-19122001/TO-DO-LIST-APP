import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [combinedInput, setCombinedInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split the combined input into task and date
    const [task, date] = combinedInput.split(',');

    // Add your logic to handle the task and date values
    if (task.trim() !== '' && date.trim() !== '') {
      addTask({ task, date });
      setCombinedInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task and date (e.g., Task Name,2024-01-31)"
        value={combinedInput}
        onChange={(e) => setCombinedInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
