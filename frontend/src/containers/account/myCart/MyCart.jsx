import CartInfos from "../../../components/account/myCart/CartInfos";
import CartProducts from "../../../components/cart/CartProducts";
import { cartContext } from "../../../context/CartProvider";
import { useContext } from "react";
import ButtonAccount from "../../../components/button/ButtonAccount";

export default function MyCart() {
    const { shoppingList } = useContext(cartContext)


    return (
        <div className="container">
            <div className="grow max-w-7xl w-full min-w-[300px] p-3 flex flex-col mx-auto sm:flex sm:flex-row">
                <div className="flex-1">
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
        </div>
    )
}