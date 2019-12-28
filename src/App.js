import React from 'react';
import Title from './Title';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Form />
        <TasksLeft />
        <TaskList />
      </div>
      
    );
  }
}

export default App;
