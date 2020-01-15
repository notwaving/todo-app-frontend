import React from "react"

class Tasks extends React.Component {
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
            
                <div className="task-list">
                    <div className="row">
                        <div className="col-4">
                            Wash dishes
                        </div>
                        <div className="col-4">
                            Housework
                        </div>
                        <div className="col-2">
                            <button className="btn-default">Edit</button>
                        </div>
                        <div className="col-2">
                            <button className="btn-default">Delete</button>
                        </div>
                    </div>
                </div>

                <div className="task-list">
                    <div className="row">
                        <div className="col-4">
                            Email Boss
                        </div>
                        <div className="col-4">
                            Admin
                        </div>
                        <div className="col-2">
                            <button className="btn-default">Edit</button>
                        </div>
                        <div className="col-2">
                            <button className="btn-default">Delete</button>
                        </div>
                    </div>
                </div>

                <div className="task-list">
                    <div className="row">
                        <div className="col-4">
                            Plan Dinner
                        </div>
                        <div className="col-4">
                            Housework
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