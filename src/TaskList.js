import React from "react"
import Tasks from "./Tasks"

class TaskList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.taskList.map(
                        (taskItem)=><Tasks item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} />
                    )
                }
            </div>
        
        )
    }
}
export default TaskList;