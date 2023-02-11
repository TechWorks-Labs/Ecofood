import Item from "../../homepage/Item"
import VerticalFilters from "./VerticalFilters"
import { useEffect } from "react"
import { useContext } from "react"
import { myContext } from "../../../context/MyApiContextProvider"

export default function ProductList(props){
    const {setProducts} = useContext(myContext); 
    const {products} = useContext(myContext); 
    
    const handleMoreProduct = () => {
        setProducts({
            ...products,
            maxProduct: products.maxProduct + 8
          });
    }

    const ListProduct = () => {
        return props.products.map((product, key )=>{
            if(key < products.maxProduct){
            return (
                <div key={key} className="bg-blue-600 h-[350px] border border-1 border-slate-100">
                    <Item origin={product.origin} weight={product.weight} name={product.name} product={product} id_product = {product.id_product}/>
                </div>
                )
            }
        })
    }

    return(
            <div className="w-full mt-[50px] flex flex-row">
                <VerticalFilters />
                <div className="flex flex-col w-full">
                    <div className="grow grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 b">
                        <ListProduct />
                    </div>
                    <button onClick={handleMoreProduct} className="w-[200px] h-[45px] mt-5 self-center bg-[#EC3434] rounded-lg p-1 text-white font-semibold">Voir plus de produits</button>
                </div>
            </div>
    )
}