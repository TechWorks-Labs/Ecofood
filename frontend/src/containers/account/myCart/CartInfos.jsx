import { useContext, useEffect, useState } from "react"
import { productsContext } from "../../../context/ProductsProvider"
import { cartContext } from "../../../context/CartProvider";
import paymentService from "../../../services/payment.service";
import { userContext } from "../../../context/UserProvider";

export default function CartInfos(props){
    
    const priceCart = (shoppingList) => {
        let priceCart = null;
        shoppingList.products.forEach(element => {
            priceCart = priceCart + element.price;
        });
        return priceCart;
    }

    const {user} = useContext(userContext);
    const { shoppingList } = useContext(cartContext);
    const countInCart = Object.keys(shoppingList.products).length;
    const [ totalPriceCart, setTotalPriceCart ] = useState(priceCart(shoppingList));

    useEffect(()=>{
        setTotalPriceCart(priceCart(shoppingList));
    },[shoppingList]);

    return(
        <div className="max-w-xl flex flex-col justify-center p-5 gap-y-3">
            <div className="flex flex-row items-center gap-x-5">
                <span>Articles ({countInCart})</span>
                <div className="flex-1 h-[1px] w-full border border-1 border-dotted border-slate-300"></div>
                <span>{totalPriceCart}$</span>
            </div>
            <div className="flex flex-row items-center gap-x-3">
                <span>Prix total</span>
                <div className=" flex-1 h-[1px] w-full border border-1 border-dotted border-slate-300"></div>
                <span className="font-bold text-xl">{totalPriceCart}$</span>
            </div>
            <button onClick={paymentService.validCart(user.id_user,shoppingList.products)} className="w-[200px] bg-red-500 text-white font-semibold rounded-xl p-2">Valider mon panier</button>
        </div>
    )
}