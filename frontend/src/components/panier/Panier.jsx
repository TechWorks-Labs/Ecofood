import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import banane from "/src/assets/images/products/banane.png";
import CardProduct from "./cardProduct.jsx/CardProduct";

export default function Panier(props) {
    const { shoppingList } = useContext(cartContext);
    const panierSlideRef = props.panierSlideRef;
    const panierIsToggle = props.panierIsToggle;
    const panierToggle = props.panierToggle;

    return (
        <div ref={panierSlideRef} className={panierIsToggle ?
            "transition-all duration-300 ease-in-out z-50 absolute top-0 right-0 h-screen bg-white w-[300px] flex flex-col items-center"
            :
            "transition-all duration-300 ease-in-out z-50 absolute top-0 right-0 h-screen translate-x-[100%]  bg-white w-[300px] flex flex-col items-center"
        }>
            <div className="w-full h-[200px] shadow-lg flex flow flex-row justify-center items-center">
                <span className="font-bold text-2xl">Mon panier</span>
                <a href="" className="absolute right-3" onClick={panierToggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="black" />
                    </svg>
                </a>
            </div>
            <div className="grow overflow-auto">

                {shoppingList.products.length > 0 ?
                    <div className="p-3">
                        <span className="font-bold text-lg">Votre panier Ecofood est de {shoppingList.priceCart} euros</span>
                        <CardProduct />
                    </div>
                    :
                    <div className="mt-10">
                        <span className="font-semibold text-xl">Votre panier est vide</span>
                    </div>}

            </div>

            <div className=" bg-white w-[275px] h-[150px] flex flex-col justify-center border border-slate-200 border-t-1 border-b-0 border-r-0 border-l-0">
                <span className="float-left mt-5">Total commande : <span className="font-bold">{shoppingList.priceCart} $</span></span>
                <span className="float-left">Produits: {shoppingList.numberProducts}</span>
                <button className="mt-5 bg-red-600 p-2 w-full h-[50px] rounded-lg text-white font-bold mb-4">Payer</button>
            </div>
        </div>
    )
}
