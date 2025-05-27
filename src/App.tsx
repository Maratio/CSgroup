import React from 'react';
import Form from './components/Form';
import TasksList from './components/TasksList';

const App = () => {
  return (
      <div>
        <h1>Task Manager</h1>
        <Form />
        <TasksList />
      </div>
  );
};

export default App;

