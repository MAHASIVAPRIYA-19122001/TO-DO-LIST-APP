// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, completeTask, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          editTask={editTask} // Pass the editTask function to TodoItem
        />
      ))}
    </div>
  );
};

export default TodoList;
