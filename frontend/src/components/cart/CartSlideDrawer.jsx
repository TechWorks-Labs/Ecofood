import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import banane from "/src/assets/images/products/banane.png";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";

export default function CartSlideDrawer(props) {
    const { shoppingList } = useContext(cartContext);
    const panierSlideRef = props.panierSlideRef;
    const panierIsToggle = props.panierIsToggle;
    const panierToggle = props.panierToggle;

    return (
        <div ref={panierSlideRef} className={panierIsToggle ?
            // Si le panier est toggle
            "cart-slide-drawer--isActive"
            :
            // sinon fermeture
            "cart-slide-drawer"
        }>
            <div className="min-w-[340px] h-[200px] shadow-lg flex flow flex-row justify-center items-center">
                <span className="font-bold text-2xl">Mon panier</span>
                <a href="" className="absolute right-3" onClick={panierToggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="black" />
                    </svg>
                </a>
            </div>
            <div className="custom-scrollbar grow overflow-auto overflow-x-hidden">

                {shoppingList.products.length > 0 ?
                    <div className="min-w-[340px]">
                        <div className="flex flex-col items-center justify-center">
                            <span className="font-bold text-lg">Votre panier Ecofood est de </span>
                            <span className="font-bold text-lg">{shoppingList.priceCart} euros</span>
                        </div>
                        <CartProducts />
                    </div>
                    :
                    <div className="mt-10 min-w-[340px] flex justify-center ">
                        <span className="font-semibold text-xl">Votre panier est vide</span>
                    </div>}

            </div>

            <div className=" bg-white min-w-[340px] p-3 h-[150px] flex flex-col justify-center border border-slate-200 border-t-1 border-b-0 border-r-0 border-l-0">
                <span className="float-left mt-5">Total commande : <span className="font-bold">{shoppingList.priceCart} $</span></span>
                <span className="float-left">Produits: {shoppingList.numberProducts}</span>
                <Link to={'/account/mycart'}>
                    <button onClick={()=>props.setPanierIsToggle(!panierIsToggle)} className="mt-5 bg-red-600 hover:bg-red-800 p-2 w-full h-[50px] rounded-lg text-white font-bold mb-4">Payer</button>
                </Link>
            </div>
        </div>
    )
}
