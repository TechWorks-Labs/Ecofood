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
      origin: []
    });

    const [products, setProducts] = useState({
      product: [],
      maxProduct: 16
    });

    const [parameterFilter,setParameterFilter] = useState({
      type : [],
      brand : [],
      origin :[],
      price : []
    })

    const [shoppingList, setShoppingList] = useState({
      products : []
    })

    const getProducts = async (type, count) => {
      await fetch(`${hostname}/product/products/${type}/${count}`)
        .then(response => response.json())
        .then(data => setProducts({...products, product: data}))
        .catch(error => console.log(error));
    };

    const getProductsByFilter = async (parameterFilter, maxProduct) => {
      const parameter = {...parameterFilter, maxProduct};
      await fetch(`${hostname}/product/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parameter)
      })
        .then(response => response.json())
        .then(data => setProducts({... products, product: data}))
        .catch(error => console.error(error));
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
        const origin = await fetch(`${hostname}/product/origin`)
          .then(response => response.json());
        
    
        setState({ 
          ...state, 
          fruits, 
          vegetables, 
          meat, 
          brand, 
          origin
        });
      };
      loadData();
      getProductsByFilter(parameterFilter,products.maxProduct);
      console.log(shoppingList);
    }, [parameterFilter]);

    return(
      <myContext.Provider value={{state, setState, getProducts, setProducts, products, parameterFilter, setParameterFilter, shoppingList, setShoppingList}}>
        {props.children}
      </myContext.Provider>
    )
  }

  export default MyContextProvider;