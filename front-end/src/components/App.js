import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      taskList : []
    }
  }

  addNewTask = (task,date)=>{
    console.log(task,date)
    axios({
      method:'POST',
      url:'http://localhost:3000/addTask',
      data:{
        taskName:task,
        taskDate:date,
      }
    })
    .then((backEndResponse)=>{
      console.log(backEndResponse)
      this.setState({
        taskList:backEndResponse.data,
      })
    })
  }

  componentDidMount(props){
    console.log(props)
  }

  render() {
    
    return (
      <Router>
        <div className="container">
          <Navbar/>
          <Route exact path ="/" render={()=>{
            return(<Home taskList={this.state.taskList} addNewTask={this.addNewTask} />)
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
