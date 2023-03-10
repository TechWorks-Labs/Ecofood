import { Route, Routes } from "react-router";
import VerticalNavBar from '../components/VerticalNavBar';
import Products from './Products';
import Product from './Product';
import Home from './Home';
import Employees from './Employees';

function App() {
  return (
    <div className="flex">
      <VerticalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/new" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  )
}

export default App
