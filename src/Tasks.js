import React from "react"

class Tasks extends React.Component {

	doneClicked = () => {
		this.props.deleteTaskFunc(this.props.item.taskID)
	}

	editClicked = () => {
		this.props.editTaskFunc(this.props.item.taskID)
	}

	render() {

		let description;
		let category;

    if (this.props.item.taskCompleted) {
			description = <div className="col-4 completedTask"> {this.props.item.taskDescription} </div>
			category = <div className="col-4 completedTask"> {this.props.item.taskCategory}</div>
			} 
			else {
				description = <div className="col-4"> {this.props.item.taskDescription} </div>
				category = <div className="col-4"> {this.props.item.taskCategory} </div>
			}
		
		return (
			<div>
				<div className="task-list">
					<div className="row">
						{/* <div className="col-4"> */}
							{description}
						{/* </div>
						<div className="col-4"> */}
							{category}
						{/* </div> */}
						<div className="col-2">
							<button className="btn btn-info" onClick={this.editClicked}>
								Completed
              </button>
						</div>
						<div className="col-2">
							<button className="btn btn-success" onClick={this.doneClicked}>
								Delete
              </button>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Tasks;