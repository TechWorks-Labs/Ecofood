import HeaderBanner from "../../components/boutique/headerBanner/HeaderBanner"
import ProductList from "../../components/boutique/productlist/ProductList"
import ProductCategoryBanner from "../../components/boutique/productlist/productCategoryBanner/ProductCategoryBanner"
import { useContext } from "react"
import { myContext } from "../../context/MyApiContextProvider"
import { useEffect } from "react";

export default function Boutique(){

    const {state} = useContext(myContext);
    const {product} = useContext(myContext).products;
    const {getProducts} = useContext(myContext);
    
    useEffect(()=>{
        getProducts(1,16);
    }, []);
        return (
            <div className="max-w-7xl h-screen mx-auto">
                <HeaderBanner />
                <ProductCategoryBanner />
                <ProductList products={product}/>
            </div>
        )
}
