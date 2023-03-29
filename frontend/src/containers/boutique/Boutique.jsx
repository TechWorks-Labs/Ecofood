import HeaderBanner from "../../components/boutique/heroBanner/HeroBanner"
import ProductsGrid from "../../components/boutique/products/ProductsGrid"
import ProductCategoryBanner from "../../components/boutique/products/ProductsCategoryMenu.jsx"
import { productsContext } from "../../context/ProductsProvider"
import { useEffect, useContext } from "react";


export default function Boutique() {

    const { state } = useContext(productsContext);
    const { product } = useContext(productsContext).products;
    const { getProducts } = useContext(productsContext);
    const filterProduct = JSON.parse(localStorage.getItem('filterProduct') || '[]');



    useEffect(() => {
        getProducts(filterProduct, 16);
    }, []);

    return (
        <div className="container max-w-7xl mx-auto mb-10">
            <HeaderBanner />
            <ProductCategoryBanner />
            <ProductsGrid products={product} />
        </div>
    )
}
