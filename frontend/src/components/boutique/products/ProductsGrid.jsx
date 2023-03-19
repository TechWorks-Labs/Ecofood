import ProductCard from "../../product/ProductCard"
import VerticalFilters from "./productsFilterMenu/ProductsFilterMenu"
import { useEffect } from "react"
import { useContext } from "react"
import { productsContext } from "../../../context/ProductsProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    <div key={key} className="h-[350px]">
                        <ProductCard origin={product.origin} weight={product.weight} name={product.name} product={product} id_product={product.id_product} />
                    </div>
                )
            }
        })
    }

    return (
        <div className="w-full mt-[50px] flex flex-row">
            <VerticalFilters />
            <div className="flex flex-col w-full">
                <div className="grow grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 b">
                    <ListProduct />
                </div>
                <button onClick={handleMoreProduct} className="w-[200px] h-[45px] mt-5 self-center bg-[#EC3434] rounded-lg p-1 text-white font-semibold">Voir plus de produits</button>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme="colored"
            />

        </div>
    )
}