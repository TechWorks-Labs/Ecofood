import React, { createContext, Component } from 'react';
import axios from 'axios';
export const myContext = createContext();

class MyContextProvider extends Component {
    state = {
      fruits: [],
      vegetable:[],
      meat:[]
    };
  
loadDada = () => {
  fetch('http://localhost:9000/product/fruit')
  .then((response) => response.json())
  .then((data) => this.setState({ fruits: data })); 

  fetch('http://localhost:9000/product/vegetable')
  .then((response) => response.json())
  .then((data) => this.setState({ vegetable: data })); 

  fetch('http://localhost:9000/product/meat')
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