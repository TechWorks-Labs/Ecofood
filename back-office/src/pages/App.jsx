import { useState } from 'react';
import { Route, Routes } from "react-router";
import VerticalNavBar from '../components/VerticalNavBar';
import Products from './Products';
import Product from './Product';
import Home from './Home';

function App() {
  return (
    <div className="flex">
      <VerticalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/new" element={<Product />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
