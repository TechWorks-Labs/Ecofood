import React, { createContext, Component, useState, useEffect } from 'react';
import axios from 'axios';
export const myContext = createContext();

  function MyContextProvider(props){
    
   const hostname = 'http://localhost:9000';

    const [state, setState] = useState({
      fruits: [],
      vegetables: [],
      meat: [],
      brand: [],
      products: []
    });

    const getProducts = async(type, count) => {
      fetch(`${hostname}/product/products/${type}/${count}`)
      .then(response => response.json())
      .then(data => setState({products : data}))
      .catch(error => console.log(error));
    }

    useEffect(() => {

      const loadData = async() => {
        const fruits = await fetch(`${hostname}/product/fruit`)
          .then(response => response.json());
        const vegetables = await fetch(`${hostname}/product/vegetable`)
          .then(response => response.json());
        const meat = await fetch(`${hostname}/product/meat`)
          .then(response => response.json());
        const brand = await fetch('http://localhost:9000/product/brand')
          .then(response => response.json());
    
        setState({ 
          ...state, 
          fruits, 
          vegetables, 
          meat, 
          brand 
        });

      };
      
      loadData();
              
      console.log(state);
    }, []);

    return(
      <myContext.Provider value={{state, setState, getProducts}}>
        {props.children}
      </myContext.Provider>
    )
  }

  export default MyContextProvider;