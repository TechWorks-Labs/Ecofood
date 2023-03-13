import CartInfos from "../../../components/account/myCart/CartInfos";
import CardProduct from "../../../components/panier/cardProduct.jsx/CardProduct";
import { cartContext } from "../../../context/CartProvider";
import { useContext, useState } from "react";

export default function MyCart() {

    const { shoppingList } = useContext(cartContext)

    return (
        <div className="max-w-7xl flex flex-row mx-auto mt-[50px] h-screen">
            <div className="flex-1 p-10">
                <div className="flex flex-col">
                    {shoppingList.products.length == 0 ?
                        <span className="font-bold text-xl mx-auto">Vous n'avez rien dans votre panier :(</span>
                        :
                        <CardProduct />}

                </div>
            </div>
            <div className="bg-slate-100">
                <CartInfos buttonTitle="Valider mon panier" />
            </div>
        </div>
    )
}