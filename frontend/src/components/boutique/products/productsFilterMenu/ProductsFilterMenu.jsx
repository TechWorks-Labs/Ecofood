import FilterContent from "./FilterOptionMenu"
import { useContext } from "react";
import { productsContext } from "../../../../context/ProductsProvider";

export default function ProductsFilerMenu(){
    const {state: {brand}} = useContext(productsContext);
    const {state: {origin}} = useContext(productsContext);
    const {setParameterFilter} = useContext(productsContext);
    const {parameterFilter} = useContext(productsContext);

    return(
        <div className="w-[300px] border border-1 border-slate-100 shadow-lg flex flex-col ">
            <FilterContent title={"Marques"} content={brand} filterName="brand" filterId="id_brand" filter={parameterFilter} setFilter={setParameterFilter}/>
            <FilterContent title={"Origines"} content={origin} filterName="origin" filterId="id_origin" filter={parameterFilter} setFilter={setParameterFilter}/>
        </div>
    )
}