import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const cartContext = createContext();

function CartProvider(props) {
  const [shoppingList, setShoppingList] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || {priceCart: 0, numberProducts: 0, products: [] }
  );


  const removeProductFromCartByEvent = (event) => {
    let productIdToRemove = parseInt(event.target.dataset.id);
    let quantityToRemove = event.target.dataset.quantity;
    let priceToRemove = quantityToRemove*event.target.dataset.price;
    setShoppingList(prevProducts => {
        return {
            priceCart: (prevProducts.priceCart - priceToRemove).toFixed(2),
            numberProducts : prevProducts.numberProducts - quantityToRemove,
            products: prevProducts.products.filter(product => product.id_product !== productIdToRemove)
        }
    })
  }

  const priceCart = (products) => {
    let priceCart = null;
    products.forEach(product => {
     priceCart += (product.quantity*product.price);
    });
    return priceCart.toFixed(2)
  }

  const numberProductsInShoppingList = (products) => {
    let numberProducts = 0;
    products.forEach(product => {
      numberProducts += product.quantity;
    });
    return numberProducts;
  }

  const shoppingIsEmpty = () => {
    if (Object.keys(shoppingList.products).length > 0) {
      return false;
    }
    return true;
  }

  const setLocalStorageFromShoppingList = (shoppingList) => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }
   
  useEffect(() => {
    setLocalStorageFromShoppingList(shoppingList);
  }, [shoppingList])

  return (
    <cartContext.Provider value={{ shoppingList, setShoppingList, numberProductsInShoppingList, priceCart, removeProductFromCartByEvent, shoppingIsEmpty }}>
      {props.children}
    </cartContext.Provider>
  );
}


export default CartProvider;