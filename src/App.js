// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };
  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filterTasks = (status) => {
    setFilter(status);
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(
        (task) => (status === 'Completed' && task.completed) || (status === 'Incomplete' && !task.completed)
      );
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="App">
      <Header />
      <TodoForm addTask={addTask} />
      <FilterBar filterTasks={filterTasks} />
      <TodoList
        tasks={filter === 'All' ? tasks : filteredTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        editTask={editTask} // Pass editTask function to TodoList
      />

      
    </div>
  );
};

export default App;