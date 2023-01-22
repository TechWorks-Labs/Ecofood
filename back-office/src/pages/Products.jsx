import React, { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://ecofood.techworks.fr/product/fruit');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, []);
  
  return (
    <div className="container ml-4">
      <h1>Ajouter un produit</h1>

      <form action="http://localhost:9000/product/create" id="product" method="POST" className="flex flex-col">
        <label htmlFor="name">Nom</label>
        <input className="border" type="text" id="name"/>
        <label htmlFor="weight">Poids</label>
        <input className="border" type="text" id="weight"/>
        <label htmlFor="nutrition">Nutrition</label>
        <input className="border" type="text" id="nutrition"/>
        <label htmlFor="price">Prix</label>
        <input className="border" type="text" id="price"/>
        <label htmlFor="origin">Origine</label>
        <input className="border" type="text" id="origin"/>
        <button type="submit">Ajouter</button>
      </form>

      <h1 className="py-4">Produits</h1>
      <table className="table-auto border border-black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produit</th>
            <th>Type</th>
            <th>Origine</th>
          </tr>
        </thead>
        {products.map((fruit) => 
            <tr key={fruit.id} className="border border-black hover:bg-slate-100">
              <td className="p-2">{ fruit.id_product }</td>
              <td className="p-2">{ fruit.name }</td>
              <td className="p-2">{ fruit.type }</td>
              <td className="p-2">{ fruit.origin }</td>
              <td className="p-2">
                <img src={`https://ecofood.techworks.fr${fruit.image}`} alt="" className="w-12"/>
              </td>
            </tr>
        )}
      </table>
    </div>
  )
}