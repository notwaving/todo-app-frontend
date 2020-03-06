import React from 'react';
import Title from './Title';
import MyForm from './MyForm';
import TasksLeft from './TasksLeft';
import TaskListHeader from './TaskListHeader';
import TaskList from './TaskList';
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

  deleteTask = (taskID) => {
    // Get the list of tasks from state
    const tasks = this.state.tasks;

    // Sample DELETE request
    // https://khp5u5qhka.execute-api.eu-west-2.amazonaws.com/dev/tasks/07afe600-7d84-4502-9520-df2995dce0aa
    axios.delete(`https://khp5u5qhka.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskID}`)
      .then((response) => {
        // Identify the task that matches the given taskID and remove it
        const updatedTasks = tasks.filter(item => item.taskID !== taskID);
        // Update the state with the new collection of tasks (i.e. without the one we just removed)
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

  }

  editTaskFunc = (taskID, taskToEdit) => {
    axios.put(`https://khp5u5qhka.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskID}`, taskToEdit)
      .then((response) => {
        // Get the state of our tasks
        const currentTasks = this.state.tasks;
        // Loop through the tasks to find the correct matching object
        for (let i = 0; i < currentTasks.length; i++) {
          const task = currentTasks[i];
          if (task.taskID === taskID) {
            // Once found a match, update the completed property
            task.taskCompleted = !task.taskCompleted;
            // Break out as no need to check anymore
            break;
          }
        }
        // Update the state
        this.setState({
          tasks: currentTasks
        });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

  }

  addTask = (taskDescription, taskCategory) => {

    const taskToAdd = {
      // taskID is created in the backend, no need to do so here
      taskDescription: taskDescription,
      taskCategory: taskCategory,
      taskCompleted: 0
    };

    axios.post('https://khp5u5qhka.execute-api.eu-west-2.amazonaws.com/dev/tasks/', taskToAdd)
      .then((response) => {
        // Get backeend to pass on taskID to frontend
        taskToAdd.taskID = response.data.tasks.taskID;

        console.log(taskToAdd);
        // Get the current list of tasks from state
        const currentTasks = this.state.tasks;
        // Add taskToAdd to the array
        currentTasks.push(taskToAdd);

        // Update the state
        this.setState({
          tasks: currentTasks
        });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

  };

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
