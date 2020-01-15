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

  deleteTask = (taskId) => {
    const tasks = this.state.tasks;
    const updatedTasks = tasks.filter(item => item.id !== taskId);
    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <MyForm />
        <TasksLeft tasksLeft={this.state.tasks.length} />
        <TaskListHeader />
        <TaskList taskList={this.state.tasks} deleteTaskFunc={this.deleteTask}/>
      </div>
      
    );
  }

}

export default App;
