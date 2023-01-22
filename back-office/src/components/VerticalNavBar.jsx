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
            <div className="w-32 p-2 hover:bg-slate-100">
              Acceuil
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="/product" >
            <div className="w-32 p-2 hover:bg-slate-100">
              Produits
            </div>
          </a>
        </li>
        <li className="my-1">
          <a href="#" >
            <div className="w-32 p-2 hover:bg-slate-100">
              Commandes
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