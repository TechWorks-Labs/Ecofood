import ProductCard from "../../product/ProductCard"
import VerticalFilters from "./productsFilterMenu/ProductsFilterMenu"
import { useEffect } from "react"
import { useContext } from "react"
import { productsContext } from "../../../context/ProductsProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsCategoryMenu from "./ProductsCategoryMenu.jsx"

export default function ProductsGrid(props) {
    const { setProducts, products } = useContext(productsContext);
    const handleMoreProduct = () => {
        setProducts({
            ...products,
            maxProduct: products.maxProduct + 8
        });
    }

    const ListProduct = () => {
        return props.products.map((product, key) => {
            if (key < products.maxProduct) {
                return (
                    <div key={key} className="h-[350px] p-2">
                        <ProductCard origin={product.origin_name} weight={product.weight} name={product.name} product={product} id_product={product.id_product} />
                    </div>
                )
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto flex flex-row grow w-full min-w-[300px]">
            <VerticalFilters />

            <div className="flex flex-col justify-around items-center w-full mt-5">
                <div className="flex flex-col justify-center items-center h-[150px] flex justify-center items-center">
                    <span className="font-light tracking-widest text-xl md:text-2xl lg:text-4xl"> La NATURE dans votre ASSIETTE.</span>
                    <ProductsCategoryMenu />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <ListProduct />
                </div>
                <button onClick={handleMoreProduct} className="mb-4 w-[200px] h-[45px] self-center bg-[#EC3434] rounded-lg text-white font-semibold">Voir plus de produits</button>
            </div>
        </div>
    )
}