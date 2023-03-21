import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import { useContext } from "react"
import { productsContext } from "../../context/ProductsProvider";
import { cartContext } from "../../context/CartProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ButtonShop(props) {
    const { product } = useContext(productsContext);
    const { shoppingList, setShoppingList, numberProductsInShoppingList, priceCart } = useContext(cartContext);

    const copyAndAddItem = (prevArray, newProduct) => {
        const newArray = JSON.parse(JSON.stringify(prevArray));
        newArray.products.push(newProduct);
        return newArray;
    }
    
    const sortProductsByQuantity = (cart) => {
        let productsByQuantity = [];
        cart.products.forEach((product, key) => {
            const productExists = productsByQuantity.findIndex(productExist => productExist.id_product === product.id_product);
            if (productExists !== -1){
                productsByQuantity[productExists].quantity += 1;
            } else {
                if (product.quantity === undefined){
                    product.quantity = 1;
                } 
                productsByQuantity.push(product);
            }
        });
        return productsByQuantity;
    }
    
    const addProductInShoppingList = (event) => {
       event.stopPropagation();
       let copyCart = copyAndAddItem(shoppingList, props.product);
       const newCartSorted = sortProductsByQuantity(copyCart);
       const numberProductsInCart = numberProductsInShoppingList(newCartSorted);
       const totalPriceInCart = priceCart(newCartSorted);
       setShoppingList({...shoppingList, priceCart: totalPriceInCart, numberProducts : numberProductsInCart,  products : newCartSorted});
       toast("L'article est dans votre panier !", {position : "top-right"});
      };
      


    return (
        <button onClick={addProductInShoppingList} className={`${props.width} flex flex-row justify-center items-center gap-x-2 bg-[#EC3434] hover:bg-red-700 rounded-lg p-1`}>
            <img src={shop} data-id={props.id_product} className=" w-[35px] "></img>
            {
                Boolean(props.title) && <span className="text-white font-semibold">{props.title}</span>
            }
        </button>
    )
}
