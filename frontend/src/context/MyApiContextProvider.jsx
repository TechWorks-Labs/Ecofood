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
    });

    const [products, setProducts] = useState({
      product: [],
      maxProduct: 16
    });

    const [parameterFilter,setParameterFilter] = useState({
      type : [],
      brand : [],
      origin :[]
    })

    const getProducts = async (type, count) => {
      await fetch(`${hostname}/product/products/${type}/${count}`)
        .then(response => response.json())
        .then(data => setProducts({...products, product: data}))
        .catch(error => console.log(error));
    };


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
    }, []);

    return(
      <myContext.Provider value={{state, setState, getProducts, setProducts, products, parameterFilter, setParameterFilter}}>
        {props.children}
      </myContext.Provider>
    )
  }

  export default MyContextProvider;