import React from "react"

class  TasksLeft extends React.Component {
    render() {
        return (
            <div>
    <p id="tasks-left">Number of tasks left: {this.props.tasksLeft}</p>
            </div>
        )
    }
}

export default TasksLeft;