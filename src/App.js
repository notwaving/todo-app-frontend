import React from 'react';
import Title from './Title';
import MyForm from './MyForm';
import TasksLeft from './TasksLeft';
import TaskList from './TaskList';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <MyForm />
        <TasksLeft />
        <TaskList />
      </div>
      
    );
  }
}

export default App;
