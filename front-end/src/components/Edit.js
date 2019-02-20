import React, {Component} from 'react'
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class Edit extends Component {
    constructor(){
        super()
        this.state={
            task: {},
        }
    }
    componentDidMount(){
        // console.log("this.props is",this.props.match.params.id)
        const tid = this.props.match.params.id
        axios({
            method:'GET',
            url: `http://localhost:3000/getTasks/${tid}`
        })
        .then((taskFromBackEnd)=>{
            // console.log("task from back end is",taskFromBackEnd)
            this.setState({
                task:taskFromBackEnd.data.task,
            })
        })
    }

    changeTask =(event)=>{
        const value = event.target.value;
        let taskStateCopy = {...this.state.task}
        // stateCopy is now:
        // { taskName: 'oil change', taskDate: '2019-02-20'}
        // let stateCopy = Object.assign({},this.state.task)
        taskStateCopy.taskName = value;
        this.setState({
            task: taskStateCopy
        })
    }

    changeDate = (event)=>{
        const value = event.target.value;
        let taskStateCopy = {...this.state.task}
        taskStateCopy.taskDate = value;
        this.setState({
            task: taskStateCopy
        })
    }

    editTask = (event)=>{
        event.preventDefault()
        console.log("got the editTask to work")
        axios({
            method: 'POST',
            data:{
                taskName:this.state.task.taskName,
                taskDate:moment(this.state.task.taskDate).format('YYYY-MM-DD'),
                id:this.props.match.params.id,
            },
            url: `http://localhost:3000/edit/`
        })
        .then((JSONData)=>{
            console.log(JSONData.data)
        })
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.editTask} className="add-box">
                    <input onChange={this.changeTask}type="text" id="new-task"  value={this.state.task.taskName} placeholder="New Task" />
                    <input onChange={this.changeDate}type="date" id="new-task-date" value={moment(this.state.task.taskDate).format('YYYY-MM-DD')}  />
                    {/* <Link to="/"><button type="submit" className="btn btn-primary">Update</button></Link> */}
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>            
            </div>
        )
    }
}

export default Edit