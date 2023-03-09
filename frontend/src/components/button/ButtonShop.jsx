import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import { useContext } from "react"
import { myContext } from "../../context/MyApiContextProvider";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ButtonShop(props){
    const {product, shoppingList, setShoppingList} = useContext(myContext);

    const productById = () => {
        setShoppingList(prevShoppingList => ({
            ... prevShoppingList, 
            products : [... prevShoppingList.products, props.product]
        }));
        const article = props.product.name;
        toast("L'article "+article+" est dans ton panier !");
    }


    return(
        <button onClick = {productById} className="bg-[#EC3434] rounded-lg p-1 float-right">
            <img src = {shop} data-id = {props.id_product} className = " w-[35px] "></img>
        </button>
        )
}
