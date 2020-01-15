import React from "react"

class Tasks extends React.Component {

    deleteClicked= () => {
        alert('You clicked the delete button!!!')
    }

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
                            <button className="btn btn-info">Edit</button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success">Done</button>
                        </div>
                    </div>
                </div>
        </div>
        
        )
    }
}

export default Tasks;