// FilterBar.js
import React from 'react';

const FilterBar = ({ filterTasks }) => {
  return (
    <div class="filter">
      <button onClick={() => filterTasks('All')}>All</button>
      <button onClick={() => filterTasks('Completed')}>Completed</button>
      <button onClick={() => filterTasks('Incomplete')}>Incomplete</button>
    </div>
  );
};

export default FilterBar;
