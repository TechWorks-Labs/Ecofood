import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import { useContext } from "react"
import { productsContext } from "../../context/ProductsProvider";
import { cartContext } from "../../context/CartProvider";
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
    
    const addProductInShoppingList = () => {
       let copyCart = copyAndAddItem(shoppingList, props.product);
       const newCartSorted = sortProductsByQuantity(copyCart);
       const numberProductsInCart = numberProductsInShoppingList(newCartSorted);
       const totalPriceInCart = priceCart(newCartSorted);
       setShoppingList({...shoppingList, priceCart: totalPriceInCart, numberProducts : numberProductsInCart,  products : newCartSorted});
      };
      


    return (
        <button onClick={addProductInShoppingList} className="bg-[#EC3434] rounded-lg p-1 float-right">
            <img src={shop} data-id={props.id_product} className=" w-[35px] "></img>
        </button>
    )
}
