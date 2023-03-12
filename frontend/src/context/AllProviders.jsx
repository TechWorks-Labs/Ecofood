import React, { createContext } from 'react';
import CartProvider from './CartProvider';
import ProductsProvider from './ProductsProvider';
import UserProvider from './UserProvider';

export const AllContext = createContext();

function AllProvider(props) {

  return (
    <AllContext.Provider value={{}}>
      <UserProvider>
        <ProductsProvider>
            <CartProvider>
              {props.children}
            </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </AllContext.Provider>
  );
}


export default AllProvider;