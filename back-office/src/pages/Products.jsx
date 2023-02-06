import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../components/Modal/DeleteModal';

const hostname = 'http://localhost:9000';
// const hostname = 'https://ecofood.techworks.fr';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${hostname}/products`);
      const productsData = await response.json();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  async function deleteProduct(id) {
    await fetch(`${hostname}/products/${id}`, { method: 'DELETE' })
      .then(response => console.log(response));
  };

  return (
    <div className="w-full px-8">
      { isOpen && <DeleteModal setIsOpen={setIsOpen} /> }
      <h1 className="py-4">Produits</h1>
      <div className="w-2/4 my-8 flex justify-between items-center">
        <div>
          <label htmlFor="limit">Limite</label>
          <input type="text" defaultValue={5} className="w-5 ml-2"/>
        </div>
        <select name="filter" id="filrer">
          <option value="">Filtrer</option>
          <option value="">Fruits</option>
          <option value="">Légumes</option>
          <option value="">En ligne</option>
          <option value="">Hors ligne</option>
        </select>
        <input type="text" placeholder="Rechercher" />
        <a href="/product/new"><button className="p-2 rounded bg-green-400 hover:bg-green-500 mx-auto">+ <span className="sm:hidden inline">Nouveau produit</span></button></a>
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
            <tr key={fruit.id_product} className="hover:bg-slate-100 h-6">
              <td className="p-2">
                <img src={`${hostname}${ fruit.image }`} alt="" className="w-8" />
              </td>

              <td className="text-left">{ fruit.id_product }</td>
              <td className="text-left">{ fruit.name }</td>
              <td className="text-left">{ fruit.type }</td>
              <td className="text-left">{ fruit.origin }</td>
              <td className="text-left">{ fruit.status == '0' ? 'Hors ligne' : 'En ligne' }</td>
              <td>
                <div className="flex justify-center items-center">
                  <Link to={`/product/${fruit.id_product}`} className="mr-4">
                    <img src="/src/assets/pen.svg" alt="Pen icon for editing product" className="w-7"/>
                  </Link>
                  <Link to={`#`}>
                    <img src="/src/assets/trash.svg" alt="Trash icon for delete product" className="w-7" onClick={() => setIsOpen(true)}/>
                  </Link>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}