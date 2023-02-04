import HeaderBanner from "../../components/boutique/headerBanner/HeaderBanner"
import ProductList from "../../components/boutique/productlist/ProductList"
import ProductCategoryBanner from "../../components/boutique/productlist/productCategoryBanner/ProductCategoryBanner"
import { useContext } from "react"
import { myContext } from "../../context/MyApiContextProvider"
import { useEffect } from "react";

export default function Boutique(){

    const {state} = useContext(myContext);
    const {getProducts} = useContext(myContext);
    const products = state.products;
    // getProducts(1,10);
    // console.log(state);
    useEffect(()=>{
        getProducts(1,10);
        console.log(products);
    }, []);
        return (
            <div className="max-w-7xl h-screen mx-auto">
                <HeaderBanner />
                <ProductCategoryBanner />
                <ProductList products={products}/>
            </div>
        )
}
