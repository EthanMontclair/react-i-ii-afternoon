import React, { Component } from 'react';
import './App.css';
import DisplayEmployee from './Components/DisplayEmployee'
import Dashboard from './Components/Dashboard'

class App extends Component {
  constructor(){
    super()

    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
        <Dashboard />
        <DisplayEmployee/>
      </div>
    )
  }
}

export default App;
