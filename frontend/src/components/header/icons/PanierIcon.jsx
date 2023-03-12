import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import { cartContext } from "../../../context/CartProvider";
import { useContext, useEffect, useState } from "react";

export default function PanierIcon(props){
    const { shoppingList } = useContext(cartContext);

    return(
        <div className="flex justify-center items-center">
            { shoppingList.products.length>0 &&
                <div className="flex justify-center items-center rounded-full bg-white w-6 h-6 absolute -translate-y-[30%] translate-x-[50%]">
                    <span className="font-bold text-sm">{shoppingList.numberProducts}</span>
                </div>
            }
        <img src={shop} onClick={props.panierToggle} ref={props.panierIconRef} className="w-[35px]" />
        </div>
    )
}