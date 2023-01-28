import React, { createContext, Component } from 'react';
import axios from 'axios';
export const myContext = createContext();

class MyContextProvider extends Component {
  hostname = 'https://ecofood.techworks.fr/api';
  // hostname = 'http://localhost:9000';

  state = {
    fruits: [],
    vegetable:[],
    meat:[]
  };
  
loadDada = () => {
  fetch(`${hostname}/product/fruit`)
  .then((response) => response.json())
  .then((data) => this.setState({ fruits: data })); 

  fetch(`${hostname}/product/vegetable`)
  .then((response) => response.json())
  .then((data) => this.setState({ vegetable: data })); 

  fetch(`${hostname}/product/meat`)
  .then((response) => response.json())
  .then((data) => this.setState({ meat: data })); 
}



componentDidMount() {
    this.loadDada();
    }

    render() {
      return (
        <myContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </myContext.Provider>
      );
    }
  }
  
  export default MyContextProvider;