import React, { createContext, Component } from 'react';
import axios from 'axios';
export const myContext = createContext();

class MyContextProvider extends Component {

    state = {
      fruits: [],
      vegetable:[],
      meat:[],
      brand: [],
    };

  // hostname = 'https://ecofood.techworks.fr/api';
  hostname = 'http://localhost:9000';

  
loadDada = () => {
  fetch(`${this.hostname}/product/fruit`)
  .then((response) => response.json())
  .then((data) => this.setState({ fruits: data })); 

  fetch(`${this.hostname}/product/vegetable`)
  .then((response) => response.json())
  .then((data) => this.setState({ vegetable: data })); 

  fetch(`${this.hostname}/product/meat`)
  .then((response) => response.json())
  .then((data) => this.setState({ meat: data })); 

  fetch('http://localhost:9000/product/brand')
  .then((response) => response.json())
  .then((data) => this.setState({ brand: data })); 
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