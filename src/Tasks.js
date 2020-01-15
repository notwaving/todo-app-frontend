import React from "react"

class Tasks extends React.Component {
    render() {
        return (
            <div>
                <div className="task-list">
                    <div className="row">
                        <div className="col-4">
                            {this.props.item.description}
                        </div>
                        <div className="col-4">
                            {this.props.item.category}
                        </div>
                        <div className="col-2">
                            <button className="btn-default">Edit</button>
                        </div>
                        <div className="col-2">
                            <button className="btn-default">Delete</button>
                        </div>
                    </div>
                </div>
        </div>
        
        )
    }
}

export default Tasks;