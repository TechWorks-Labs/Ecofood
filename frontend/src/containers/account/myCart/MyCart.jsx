import CartInfos from "../../../components/account/myCart/CartInfos";
import CartProducts from "../../../components/cart/CartProducts";
import { cartContext } from "../../../context/CartProvider";
import { useContext, useEffect, useState } from "react";
import ButtonAccount from "../../../components/button/ButtonAccount";
import { AllContext } from "../../../context/AllProviders";
import { useRef } from "react";
export default function MyCart() {
    const { bodyHeight } = useContext(AllContext);
    const { shoppingList } = useContext(cartContext)
    const containerRef = useRef();

    const updateHeightContainer = () => {
        if (containerRef.current.offsetHeight < bodyHeight) {
            let heightContainer = bodyHeight + 'px';
            containerRef.current.style.height = heightContainer;
        }
    }

    useEffect(() => {
        updateHeightContainer();
    }, [shoppingList])

    return (
        <div ref={containerRef} className={`max-w-6xl flex flex-row mx-auto`}>
            <div className="flex-1 p-10">
                <ButtonAccount />
                <div className="flex flex-col">
                    {shoppingList.products.length == 0 ?
                        <span className="font-bold text-xl mx-auto">Vous n'avez rien dans votre panier :(</span>
                        :
                        <CartProducts />}
                </div>
            </div>
            <div className="bg-slate-100">
                <CartInfos buttonTitle="Valider mon panier" />
            </div>
        </div>
    )
}