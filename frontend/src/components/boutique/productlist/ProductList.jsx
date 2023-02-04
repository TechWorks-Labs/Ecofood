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
            maxProduct: products.maxProduct + 15
          });
    }

    useEffect(()=>{
        console.log(products)
    })


    const ListProduct = () => {
        return props.products.map((product, key )=>{
            return (
            <div key={key} className="bg-blue-600 h-[350px] border border-1 border-slate-100">
                 <Item origin={product.origin} weight={product.weight} name={product.name} />
            </div>
            )
        })
    }

    return(
            <div className="w-full mt-[50px] flex flex-row">
                <VerticalFilters />
                <div className="flex flex-col ">
                    <div className="grow grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                        <ListProduct />
                    </div>
                    <button onClick={handleMoreProduct} className="w-[200px] h-[45px] mt-5 self-center bg-[#EC3434] rounded-lg p-1 text-white font-semibold">Voir plus de produits</button>
                </div>
            </div>
    )
}