import React from "react"

class Tasks extends React.Component {

    doneClicked= () => {
        this.props.deleteTaskFunc(this.props.item.id)
    }

    editClicked= () => {
        alert(`Task ID is: ${this.props.item.id}` )
        // Would like to render a version of MyForm, displaying it already filled out with description and category
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
                            <button className="btn btn-info" onClick={this.editClicked}>
                                Edit
                            </button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success" onClick={this.doneClicked}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        
        )
    }
}

export default Tasks;