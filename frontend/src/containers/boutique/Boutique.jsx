import HeaderBanner from "../../components/boutique/heroBanner/HeroBanner"
import ProductsGrid from "../../components/boutique/products/ProductsGrid"
import ProductCategoryBanner from "../../components/boutique/products/ProductsCategoryMenu.jsx"
import { productsContext } from "../../context/ProductsProvider"
import { useEffect, useContext } from "react";


export default function Boutique() {

    const { state } = useContext(productsContext);
    const { product } = useContext(productsContext).products;
    const { getProducts, parameterFilter } = useContext(productsContext);

    useEffect(() => {
        
    }, []);

    return (
        <div className="container-row grow">
            <ProductsGrid products={product} />
        </div>
    )
}
