import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm/ProductForm';

export default function Product() {
  const { id } = useParams();

  useEffect(() => {
    
  }, []);
  
  return (
    <div className="container ml-4">
        <h1 className="py-4">Produit { id }</h1>
        <ProductForm />
    </div>
  )
}