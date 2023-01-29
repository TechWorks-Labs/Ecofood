import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm/ProductForm';

const hostname = 'http://localhost:9000';
// const hostname = 'https://ecofood.techworks.fr';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${hostname}/product/fruit`);
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container ml-4">
      <ProductForm />
      <h1 className="py-4">Produits</h1>

      <div className="my-8">
        <label htmlFor="limit">Limite</label>
        <input type="text" defaultValue={5} className="w-5"/>
        <select name="filter" id="filrer">
          <option value="">Filtrer</option>
          <option value="">Fruits</option>
          <option value="">Légumes</option>
          <option value="">En ligne</option>
          <option value="">Hors ligne</option>
        </select>
        <input type="text" placeholder="Rechercher" />
      </div>

      <table className="table-auto w-full">
        <thead className="border-b border-black">
          <tr>
            <th></th>
            <th className="text-left pb-3">ID</th>
            <th className="text-left pb-3">Produit</th>
            <th className="text-left pb-3">Type</th>
            <th className="text-left pb-3">Origine</th>
            <th className="text-left pb-3">Status</th>
            <th className="pb-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((fruit) =>
            <tr key={fruit.id} className="hover:bg-slate-100">
              <td className="p-2">
                <img src={`${hostname}${fruit.image}`} alt="" className="w-12" />
              </td>
              <td className="text-left">{fruit.id_product}</td>
              <td className="text-left">{fruit.name}</td>
              <td className="text-left">{fruit.type}</td>
              <td className="text-left">{fruit.origin}</td>
              <td className="text-left">{fruit.status == '0' ? 'Hors ligne' : 'En ligne'}</td>
              <td className="flex justify-center">
                <button className="m-2 p-2 rounded bg-green-400 hover:bg-green-500">Modifier</button>
                <button className="m-2 p-2 rounded bg-red-400 hover:bg-red-500">Supprimer</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}