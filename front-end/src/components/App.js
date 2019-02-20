import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Edit from './Edit'
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  constructor(){
    super()
    this.state = {
      taskList : []
    }
  }

  componentDidMount(){
    axios({
      method:'GET',
      url:'http://localhost:3000/getTasks',
    })
    .then((backEndResponse)=>{
      // console.log("backendresponse is",backEndResponse)
      this.setState({
        taskList:backEndResponse.data,
      })
    })
  }

  addNewTask = (task,date)=>{
    // console.log("task,date is",task,date)
    axios({
      method:'POST',
      url:'http://localhost:3000/addTask',
      data:{
        taskName:task,
        taskDate:date,
      }
    })
    .then((backEndResponseAddTask)=>{
      // console.log("backend response addtask is",backEndResponseAddTask)
      this.setState({
        taskList:backEndResponseAddTask.data,
      })
    })
  }

  render() {
    
    return (
      <Router>
        <div className="container">
          <Navbar/>
          <Route exact path="/" render={()=><Home taskList={this.state.taskList} addNewTask={this.addNewTask} />} />
          <Route exact path="/edit/:id" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;
