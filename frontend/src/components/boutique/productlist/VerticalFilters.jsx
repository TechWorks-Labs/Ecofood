import FilterContent from "./filtercontent/FilterContent"
import { useContext } from "react";
import { myContext } from "../../../context/MyApiContextProvider";

export default function VerticalFilters(){
    const {state: {brand}} = useContext(myContext);
    const {state: {origin}} = useContext(myContext);
    const {setParameterFilter} = useContext(myContext);
    const {parameterFilter} = useContext(myContext);

    return(
        <div className="w-[300px] border border-1 border-slate-300 flex flex-col">
            <FilterContent title={"Marques"} content={brand} filterName="brand" filterId="id_brand" filter={parameterFilter} setFilter={setParameterFilter}/>
            <FilterContent title={"Origines"} content={origin} filterName="origin" filterId="id_origin" filter={parameterFilter} setFilter={setParameterFilter}/>
        </div>
    )
}