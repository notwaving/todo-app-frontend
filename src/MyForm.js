import React from 'react';

class MyForm extends React.Component {

  state = {
    taskDescription: "Your task here",
    taskCategory: "Your category here"
  }

  addTask = (event) => {
    event.preventDefault();
    this.props.addTaskFunc(this.state.taskDescription, this.state.taskCategory);
}

    render() {
      return (
        <form>
            <div className="form-group row">
                <label for="inputTask" className="col-sm-1 col-form-label">New Task</label>
                <div className="col-sm-4">
                <input type="text" className="form-control" id="inputText" placeholder="Type here"/>
                </div>
                <label for="inputTask" className="col-sm-1 col-form-label">Category</label>
                <div className="col-sm-4">
                <input type="text" className="form-control" id="inputCategory" placeholder="Optional"/>
                </div>
                <button type="submit" className="col-sm-1 btn btn-outline-primary mb-2" onClick={this.addTask}>
                  Add
                </button>
            </div>        
        </form>        
      )
    }
}

export default MyForm;