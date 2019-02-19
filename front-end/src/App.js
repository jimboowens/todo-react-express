import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  addNewTask(event){
    event.preventDefault();
    console.dir (event.target)
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar/>
          <Route exact path ="/" render={()=>{
          return(<Home addNewTask={this.addNewTask} />)
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
