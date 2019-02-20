import React, {Component} from 'react';

 class Home extends Component{
    constructor(){
        super();
        this.state={
            task:"",
            date:"",
        }
    }

    addNewTask = (event)=>{
        event.preventDefault()
        // console.log ('someone changed the task')
        this.props.addNewTask(this.state.task,this.state.date);
    }

    changeTask = (event)=>{
        this.setState({
            task:event.target.value,
        })
    }
    changeDate = (event)=>{
        this.setState({
            date:event.target.value,
        })     
    }

    render(){
        const taskArray = this.props.taskList.map((task)=>{
            return(
                <tr key={task.id}>
                  <td>{task.taskName} - {task.taskDate}</td>
                  <td><button className="btn red"><i className="material-icons">delete</i></button></td>
                  <td><button className="btn blue"><i className="material-icons">edit</i></button></td>
                </tr>
            )
          })
        return(
            <div className="to-do-app">    
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center blue-text">To-Do List</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Made with React and Express</h5>
                        </div>
                    </div>
                </div>  
                <div className="container">
                    <form onSubmit={this.addNewTask} className="add-box"> {/* this is done when the user presses enter */}
                        <input onChange={this.changeTask} type="text" id="new-task" placeholder="New Task" value={this.state.task}/> {/* this is run whenever a change is made; making a rerender run, but the only change is in the virtual dom so the real dom doesn't run */}
                        <input onChange={this.changeDate} type="date" id="new-task-date" value={this.state.date}/> {/* this is run whenever a change is made; making a rerender run, but the only change is in the virtual dom so the real dom doesn't run */}
                        {this.state.task.length>0&&this.state.date.length>0 ? <button type="submit" className="btn btn-primary waves-effect">Add Task</button> : <button type="submit" className="no-click btn btn-primary waves-effect">Add Task</button>} {/* this means the ability to submit will only happen if the two inputs are populated. */}
                    </form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {taskArray}
                    </tbody>
                </table>
                </div>
            </div>
        )
     }
}
export default Home;