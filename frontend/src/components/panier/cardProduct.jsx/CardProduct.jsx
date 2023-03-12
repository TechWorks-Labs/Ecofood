import { cartContext } from "../../../context/CartProvider"
import { useContext } from "react"
import banane from "/src/assets/images/products/banane.png";

export default function CardProduct() {
    const { shoppingList, removeProductFromCartByEvent } = useContext(cartContext);

    const Products = () => {
        return shoppingList.products.map((product, key) => {
            return (
                <div key={key} className="flex flex-col w-full border border-b-1 border-t-0 border-l-0 border-r-0 border-slate-300">

                    <div className="flex flex-row items-center justify-center gap-x-3 p-5">
                        <img src={banane} className="w-[30px] h-[30px]" />
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                {product.quantity > 1 &&
                                    <span className="font-bold text-xl text-red-600">x{product.quantity}</span>}<span className="font-bold ml-1">{product.name}</span>
                            </div>
                            <span>{product.description}</span>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-row items-center gap-x-2 float-right mr-3 mb-2">
                            <div className="flex flex-col justify-center">
                                <span className="text-[1em] text-red-600 font-bold">{product.price} $</span>
                                <span className="text-[0.8em]">{product.weight}$/Kg</span>
                            </div>
                            <button data-id={product.id_product} data-quantity={product.quantity} data-price={product.price} onClick={(e) => removeProductFromCartByEvent(e)} className="border border-1 border-slate-300 p-1 w-[30px] text-slate-300">X</button>
                        </div>
                    </div>

                </div>
            )
        })
    }

    return (
        <div>
            <Products />
        </div>
    )
}