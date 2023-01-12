import React, { createContext, Component } from 'react';

export const myContext = createContext();

class MyContextProvider extends Component {
    state = {
      fruits: [],
      legumes:[]
    };
  

componentDidMount() {
    fetch('http://localhost:9000/product/fruit')
        .then((response) => response.json())
        .then((data) => this.setState({ fruits: data }));
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