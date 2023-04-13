import React, { createContext } from 'react';
import CartProvider from './CartProvider';
import ProductsProvider from './ProductsProvider';
import UserProvider from './UserProvider';

export const AllContext = createContext();

function AllProvider(props) {
  const headerHeight = 67;
  const footerHeight = 150;
  const bodyHeight = window.innerHeight - footerHeight - headerHeight;
  return (
    <AllContext.Provider value={{ bodyHeight }}>
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