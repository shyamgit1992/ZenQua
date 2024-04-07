import React, { Component } from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'

export class App extends Component {
  render() {
    return (
      <div>
         <div style={{backgroundColor:'black'}}>
         <Nav/>
        </div>
    
      <Home/>
      </div>
    )
  }
}

export default App