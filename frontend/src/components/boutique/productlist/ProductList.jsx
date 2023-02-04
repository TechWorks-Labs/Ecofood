import Item from "../../homepage/Item"
import VerticalFilters from "./VerticalFilters"

export default function ProductList(){
    const products = [{origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"},
    {origin:"France", name:"Banane", weight:"200"}]


    const ListProduct = () => {
        return products.map((product, key )=>{
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
            <div className="grow grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                <ListProduct />
            </div>
        </div>
    )
}