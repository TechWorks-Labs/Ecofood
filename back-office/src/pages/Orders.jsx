import React, { useState, useEffect } from 'react';

const hostname = 'http://localhost:9000';
// const hostname = 'https://ecofood.techworks.fr';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`${hostname}/orders`);
      const ordersData = await response.json();
      setOrders(ordersData);
    };
    fetchOrders();
  }, []);

  return (
    <div className="w-full px-8">
      <h1 className="py-4">Produits</h1>
      <div className="xl:w-1/2 lg:w-full my-8 flex justify-between items-center">
        <div>
          <label htmlFor="limit">Limite</label>
          <input type="text" defaultValue={5} className="w-5 ml-2"/>
        </div>
      </div>

      <table className="table-auto w-full ">
        <thead className="border-b border-black sticky top-0 bg-white shadow-ysm">
          <tr>
            <th className="text-left pb-3">ID</th>
            <th className="text-left pb-3">Client</th>
            <th className="text-left pb-3">Status</th>
            <th className="text-left pb-3">Montant</th>
            <th className="text-left pb-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) =>
            <tr key={order.id_order} className="hover:bg-slate-100 h-6">
              <td className="text-left">{ order.id_order }</td>
              <td className="text-left capitalize">{ order.name + ' ' + order.lastname }</td>
              <td className="text-left">{ order.status == 0 ? "En cours" : "Payé" }</td>
              <td className="text-left">{ order.total_price }</td>
              <td>
                <div className="flex justify-center items-center">
                  {/* <Link to={`/#`} className="mr-4"> */}
                    <img src="/src/assets/pen.svg" alt="Pen icon for editing product" className="w-6"/>
                  {/* </Link> */}
                  {/* <Link to={`/#`}> */}
                    <img src="/src/assets/trash.svg" alt="Trash icon for delete product" className="w-6" onClick={() => deleteClick(fruit.id_product)} /> 
                  {/* </Link> */}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}