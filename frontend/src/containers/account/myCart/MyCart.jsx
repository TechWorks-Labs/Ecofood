import Checkout from "./Checkout"
import { myContext } from "../../../context/MyApiContextProvider"
import { useContext } from "react"

export default function MyCart(){

    const { shoppingList } = useContext(myContext);

    const MyProductsCart = () => {
        return shoppingList.products.map((product, index)=>{
            console.log(product)
            return(
                <span>{product.name}</span>
            )
        })
    }

    return(
        <div className="max-w-7xl flex flex-row mx-auto mt-[50px] h-screen">
            <div className="flex-1 bg-red-400">
                <div className="flex flex-col">
                    <MyProductsCart />
                </div>
            </div>
            <div className="bg-slate-100">
                <Checkout buttonTitle="Valider mon panier" />
            </div>
        </div>
    )
}