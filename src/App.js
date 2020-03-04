import React from 'react';
import Title from './Title';
import MyForm from './MyForm';
import TasksLeft from './TasksLeft';
import TaskListHeader from './TaskListHeader';
import TaskList from './TaskList';
// import uuidv4 from 'uuid/v4';
import axios from 'axios';

class App extends React.Component {

  state = {
    tasks: [
      
    ]
  }
  // When component mounts, trigger this...
  componentDidMount = () => {
    // Fetch tasks from API
    axios.get('https://khp5u5qhka.execute-api.eu-west-2.amazonaws.com/dev/tasks/')
    .then((response) => {
      // Handle success
      this.setState({
        tasks: response.data.tasks
      })
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
  }

  deleteTask = (taskId) => {

    const tasks = this.state.tasks;

    const updatedTasks = tasks.filter(item => item.id !== taskId);

    this.setState({
      tasks: updatedTasks
    });
  }

  editTaskFunc = (taskID) => {
    // Find the task that needs to be updated
    const tasks = this.state.tasks; // Array of tasks
    for(let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      
      if(task.id === taskID) {
        // Update the property (or properties) on the identified task
        task.completed = true;
        break;
      }
    }

    // Update state to reflect changes made to the task
    this.setState({
      tasks: tasks
    })
  }

  addTask = (taskDescription, taskCategory) => {

    const taskToAdd = {
      // id: uuidv4(),
      description: taskDescription,
      category: taskCategory,
      completed: 0
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
