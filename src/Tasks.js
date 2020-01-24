import React from "react"

class Tasks extends React.Component {

	doneClicked = () => {
		this.props.deleteTaskFunc(this.props.item.id)
	}

	editClicked = () => {
		this.props.editTaskFunc(this.props.item.id)
	}

	render() {

		let description;
		let category;

    if (this.props.item.completed) {
			description = <div className="col-4 completedTask"> {this.props.item.description} </div>
			category = <div className="col-4 completedTask"> {this.props.item.category}</div>
			} 
			else {
				description = <div className="col-4"> {this.props.item.description} </div>
				category = <div className="col-4"> {this.props.item.category} </div>
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