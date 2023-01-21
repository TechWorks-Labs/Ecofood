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
              <td className="p-2">{fruit.id_product}</td>
              <td className="p-2">{fruit.name}</td>
              <td className="p-2">{fruit.type}</td>
              <td className="p-2">{fruit.origin}</td>
            </tr>
        )}

      </table>
    </div>
  )
}