import React from 'react';

class MyForm extends React.Component {

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
                <button type="submit" className="col-sm-1 btn btn-outline-primary mb-2">Add</button>        
        </form>        
      )
    }
}

export default MyForm;