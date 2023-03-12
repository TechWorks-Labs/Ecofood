import React from 'react';
import { useState, Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Site from './containers/Site';

export default function App() {

    return (
      <div className="App">
         <BrowserRouter basename='/'>
          <Site />
         </BrowserRouter>
      </div>
    )
  }

