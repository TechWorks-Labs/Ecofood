import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm/ProductForm';

const hostname = 'http://localhost:9000';
// const hostname = 'https://ecofood.techworks.fr';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct]  = useState([]);

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        const response = await fetch(`${ hostname }/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
      };
      fetchProduct();
    }
  }, []);
  
  return (
    <div className="container ml-4">
      <h1 className="py-4">Produit { id }</h1>
      { id ? <ProductForm productData={product} update={true} /> : <ProductForm update={false} /> }
    </div>
  )
}