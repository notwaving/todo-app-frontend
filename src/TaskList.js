import React from "react"

class TaskList extends React.Component {
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
                        <button className="btn-default">Edit</button></td>
                    </div>
                    <div className="col-2">
                        <td><button className="btn-default">Delete</button></td>
                    </div>
                </div>
            <br>
                <div class="row">
                    <div class="col-4">
                        Email boss
                    </div>
                    <div class="col-4">
                        Admin
                    </div>
                    <div class="col-2">
                        <button class="btn-default">Edit</button></td>
                    </div>
                    <div class="col-2">
                        <td><button class="btn-default">Delete</button></td>
                    </div>
                </div>

            <br>
                <div class="row">
                    <div class="col-4">
                        Plan dinner
                    </div>
                    <div class="col-4">
                        Housework
                    </div>
                    <div class="col-2">
                        <button class="btn-default">Edit</button></td>
                    </div>
                    <div class="col-2">
                        <td><button class="btn-default">Delete</button></td>
                    </div>
                </div>
            </div>
          
        )
    }
}
export default TaskList;