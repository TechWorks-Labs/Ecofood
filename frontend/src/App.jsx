import React from 'react';
import { useState, Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Site from './containers/Site';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <Site />
         </BrowserRouter>
      </div>
    )
  }
}

export default App;