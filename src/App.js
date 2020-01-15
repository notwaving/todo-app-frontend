import React from 'react';
import Title from './Title';
import MyForm from './MyForm';
import TasksLeft from './TasksLeft';
import TaskListHeader from './TaskListHeader';
import TaskList from './TaskList';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Do yoga", category: "Health", completed: false },
      { id: 2, description: "Put on laundry", category: "Housework", completed: false },
      { id: 3, description: "Email Beckie", category: "Admin", completed: false }
    ]
  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <MyForm />
        <TasksLeft tasksLeft={this.state.tasks.length} />
        <TaskListHeader />
        <TaskList taskList={this.state.tasks}/>
      </div>
      
    );
  }

}

export default App;
