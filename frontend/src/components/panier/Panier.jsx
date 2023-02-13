import { useState, useContext, useEffect } from "react";
import { myContext } from "../../context/MyApiContextProvider";
import banane from "/src/assets/images/products/banane.png";

export default function Panier(props){
    const {shoppingList, setShoppingList} = useContext(myContext);
    const panierSlideRef = props.panierSlideRef;
    const panierIsToggle = props.panierIsToggle;
    const panierToggle = props.panierToggle;
    const panier = shoppingList;
    const [totalPricePanier, setPricePanier] = useState(null);
    const [ItemsInPanier, setItemsInPanier] = useState(0);

    const pricePanier = () => {
        if(Boolean(panier.products)){
            let price = 0;
            panier.products.forEach((element,key) => {
                price += element.price;
            });
            return price.toFixed(2);
        }
    }

    const numberItemsInPanier = () => {
        if(panier.products.length>0){
            return panier.products.length;
        }
    }
    
    const handleRemoveProduct = (event) => {
        let removeID = parseInt(event.target.dataset.id);
        console.log("remove id "+removeID);
        setShoppingList(prevProducts => {
            return {
                products: prevProducts.products.filter(product => product.id_product !== removeID)
            }
        })
      console.log(shoppingList);
    }

    useEffect(()=>{
        setPricePanier(pricePanier());
        setItemsInPanier(numberItemsInPanier());
    });

    const Products = () => {
        if(panier.products.length>0)
        {
            return panier.products.map((product,key)=>{
                return (
                <div key={key} className="flex flex-col w-full border border-b-1 border-t-0 border-l-0 border-r-0 border-slate-300">
                    
                    <div className="flex flex-row items-center justify-center gap-x-3 p-5">
                        <img src={banane} className="w-[30px] h-[30px]"/>
                        <div className="flex flex-col">
                            <span className="font-bold">{product.name}</span>
                            <span>{product.description}</span>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-row items-center gap-x-2 float-right mr-3 mb-2">
                            <div className="flex flex-col justify-center">
                                <span className="text-[1em] text-red-600 font-bold">{product.price} $</span>
                                <span className="text-[0.8em]">{product.weight}$/Kg</span>
                            </div>
                            <button data-id = {product.id_product} onClick={(e) => handleRemoveProduct(e)} className="border border-1 border-slate-300 p-1 w-[30px] text-slate-300">X</button>
                        </div>
                    </div>

                </div>
                )
            })
        };
    }

    return(
        <div ref={panierSlideRef} className={panierIsToggle ?
            "transition-all duration-300 ease-in-out z-50 absolute top-0 right-0 h-screen bg-slate-200 w-[300px] flex flex-col items-center"
            :
            "transition-all duration-300 ease-in-out z-50 absolute top-0 right-0 h-screen translate-x-[100%]  bg-slate-200 w-[300px] flex flex-col items-center"
            }>
            <div className="w-full h-[200px] shadow-lg flex flow flex-row justify-center items-center">
                <span className="font-bold text-2xl">Mon panier</span>
                <a href="" className="absolute right-3" onClick={panierToggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="black"/>
                    </svg>
                </a>
            </div>
            <div className="overflow-auto">

                {panier.products.length>0 ? 
                <div className="p-3">
                    <span className="font-bold text-lg">Votre panier Ecofood est de {totalPricePanier} euros</span>
                </div> 
                :
                <span>Votre panier est vide</span>}
                <Products />
            </div>
    
            <div className=" bg-slate-200 w-[275px] h-[150px] flex flex-col justify-center border border-slate-300 border-t-2 border-b-0 border-r-0 border-l-0">
                <span className="float-left mt-5">Total commande : <span className="font-bold">{totalPricePanier} $</span></span>
                <span className="float-left">Produits: {ItemsInPanier}</span>
                <button className="mt-5 bg-red-600 p-2 w-full h-[50px] rounded-lg text-white font-bold mb-4">Payer</button>
            </div>
        </div>
        )
}
