import { useState } from 'react';
import { Route, Routes } from "react-router";
import VerticalNavBar from '../components/VerticalNavBar';
import Products from './Products';
import Home from './Home';

function App() {
  return (
    <div className="container flex">
      <VerticalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
