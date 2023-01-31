import { useState } from 'react'

export default function VerticalBar() {
  return (
    <div className="w-1/6 h-full p-4 border-r border-slate-200">
      <div className="flex items-center mb-8 px-2">
        <div className="w-10 h-10 mr-4 bg-red-500 rounded-full"></div>
        <span>Victorien Lambert</span>
      </div>
      <ul>
        <li className="my-1">
          <a href="/">
            <div className="w-32 p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/home.svg" className="w-8 mr-4"/>
              <span>Acceuil</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="/products" >
            <div className="w-32 p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/market.svg" className="w-8 mr-4"/>
              <span>Produits</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="#" >
            <div className="w-32 p-2 hover:bg-slate-100 flex items-center">
              <img src="/src/assets/order.svg" className="w-8 mr-4"/>
              <span>Commandes</span>
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="#" >
            <div className="w-32 p-2 hover:bg-slate-100">
              Statistiques
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}