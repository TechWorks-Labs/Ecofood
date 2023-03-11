import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import { myContext } from "../../../context/MyApiContextProvider";
import { useContext, useEffect, useState } from "react";

export default function PanierIcon(props){

    const { shoppingList } = useContext(myContext);
    const [ cartIsEmpty, setCartIsEmpty ] = useState(false);

    const setCountInPanier = (cart) => {
        const count = Object.keys(shoppingList.products).length;
        return count;
    }

    let countInPanier = setCountInPanier(shoppingList);

    const isCartEmpty  = (cart) => {
        if( Object.keys(cart.products).length > 0 ){
            setCartIsEmpty(false);
        } else {
            setCartIsEmpty(true);
        }
    }

    useEffect(()=>{
        isCartEmpty(shoppingList);
    },[shoppingList]);
    
    return(
        <div className="flex justify-center items-center">
            { !cartIsEmpty &&
                <div className="flex justify-center items-center rounded-full bg-white w-6 h-6 absolute -translate-y-[30%] translate-x-[50%]">
                    <span className="font-bold text-sm">{countInPanier}</span>
                </div>
            }
        <img src={shop} onClick={props.panierToggle} ref={props.panierIconRef} className="w-[35px]" />
        </div>
    )
}