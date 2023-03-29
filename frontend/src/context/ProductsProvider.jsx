import React, { createContext, Component, useState, useEffect } from 'react';
import axios from 'axios';
export const productsContext = createContext();

  function ProductsProvider(props){
    
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
      type: JSON.parse(localStorage.getItem('filterProduct') || '[]'),
      brand : [],
      origin :[],
      price : []
    })

    const getProducts = async (type, count) => {
      await fetch(`${hostname}/products/type/${type}/count/${count}`)
        .then(response => response.json())
        .then(data => {setProducts({...products, product: data})})
        .catch(error => console.log(error));
    };

    const getProductsByFilter = async (parameterFilter, maxProduct) => {
      const parameter = {...parameterFilter, maxProduct};
      console.log('parameter',parameter);
      await fetch(`${hostname}/products/filter`, {
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
        const fruits = await fetch(`${hostname}/products/type/1`)
          .then(response => response.json());
        const vegetables = await fetch(`${hostname}/products/type/2`)
          .then(response => response.json());
        const meat = await fetch(`${hostname}/products/type/3`)
          .then(response => response.json());
        const brand = await fetch(`${hostname}/products/brands`)
          .then(response => response.json());
        const origin = await fetch(`${hostname}/products/origin`)
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
    }, [parameterFilter]);

    return(
      <productsContext.Provider value={{state, setState, getProducts, setProducts, products, parameterFilter, setParameterFilter}}>
        {props.children}
      </productsContext.Provider>
    )
  }

  export default ProductsProvider;