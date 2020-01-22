import React from 'react';
import Title from './Title';
import MyForm from './MyForm';
import TasksLeft from './TasksLeft';
import TaskListHeader from './TaskListHeader';
import TaskList from './TaskList';
import uuidv4 from 'uuid/v4';

class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "Do yoga", category: "Health", completed: false },
      { id: uuidv4(), description: "Put on laundry", category: "Housework", completed: false },
      { id: uuidv4(), description: "Email Beckie", category: "Admin", completed: false }
    ]
  }

  deleteTask = (taskId) => {

    const tasks = this.state.tasks;

    const updatedTasks = tasks.filter(item => item.id !== taskId);

    this.setState({
      tasks: updatedTasks
    });
  }

  editTaskFunc = (taskID) => {
    alert(`You want to edit ${taskID} from state/App`);
  }

  addTask = (taskDescription, taskCategory) => {

    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      category: taskCategory,
      completed: false
    };

    console.log("Adding task");
    console.log(taskToAdd);

    const currentTasks = this.state.tasks;

    currentTasks.push(taskToAdd);

    this.setState({
      tasks: currentTasks
    });

  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <MyForm addTaskFunc={this.addTask} />
        <TasksLeft tasksLeft={this.state.tasks.length} />
        <TaskListHeader />
        <TaskList 
          taskList={this.state.tasks} 
          deleteTaskFunc={this.deleteTask} 
          editTaskFunc={this.editTaskFunc} 
        />
      </div>

    );
  }

}

export default App;
