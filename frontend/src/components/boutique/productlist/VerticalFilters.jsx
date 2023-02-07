import FilterContent from "./filtercontent/FilterContent"
import { useContext } from "react";
import { myContext } from "../../../context/MyApiContextProvider";

export default function VerticalFilters(){
    const {state: {brand}} = useContext(myContext);
    const {setParameterFilter} = useContext(myContext);
    const {parameterFilter} = useContext(myContext);

    // const setBrandFilter = (param) => {
    //     if(!parameterFilter.brand.includes(param)){
    //         setParameterFilter({
    //             ...parameterFilter,
    //             brand: [...parameterFilter.brand, ...param],
    //           });
    //     } 
    //     console.log(parameterFilter)
    // }

    // const setBrandFilter = (param) => {
    //     setParameterFilter({
    //         ...parameterFilter,
    //         brand:4,
    //         });
    //     console.log(parameterFilter)
    // }
    

    return(
        <div className="w-[300px] border border-1 border-slate-300 flex flex-col">
            <FilterContent title={"Marques"} content={brand} filter={parameterFilter} setFilter={setParameterFilter}/>
        </div>
    )
}