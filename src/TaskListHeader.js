import React from "react"

class TaskListHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="task-list-header">
                    <div className="row">
                        <div className="col-4">
                            Task
                        </div>
                        <div className="col-4">
                            Category
                        </div>
                        <div className="col-2"></div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default TaskListHeader;