import React from "react";

export default function DeleteModal({ setIsOpen, callback, id }) {
  return (
    <div>
      <div className="w-full h-full fixed left-0 top-0 z-10 bg-black/25" onClick={() => setIsOpen(false)}></div>
      <div className="p-10 fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-20 bg-slate-100 rounded-sm drop-shadow-2xl border">
        <p>Êtes vous sûr de vouloir supprimer cet élément ?</p>
        <div className="flex justify-center pt-4">
          <button className="bg-red-400 hover:bg-red-500 w-32 p-2 m-2 rounded-sm" onClick={() => setIsOpen(false)}>Annuler</button>
          <button className="bg-green-400 hover:bg-green-500 w-32 p-2 m-2 rounded-sm" onClick={() => callback(id)}>Confirmer</button>
        </div>
      </div>
    </div>
  );
};