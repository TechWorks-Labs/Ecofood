import { useState } from 'react'

export default function VerticalBar() {
  return (
    <div className="absolute z-30 h-full p-4 border-r -translate-x-full border-slate-200 bg-white md:relative md:w-64 md:translate-x-0">
      <div className="flex items-center mb-8 px-2">
        <div className="w-10 h-10 mr-4 bg-red-500 rounded-full"></div>
        <span>Victorien Lambert</span>
      </div>
      <ul>
        <li className="my-1">
          <a href="/">
            <div className="p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/home.svg" className="w-8 mr-4"/>
              <span>Acceuil</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="/products" >
            <div className="p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/market.svg" className="w-8 mr-4"/>
              <span>Produits</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="/orders" >
            <div className="p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/order.svg" className="w-8 mr-4"/>
              <span>Commandes</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="#" >
            <div className="p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/stats.svg" className="w-8 mr-4"/>
              <span>Statistiques</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="/employees" >
            <div className="p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/users.svg" className="w-8 mr-4"/>
              <span>Employés</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}