import FilterContent from "./filtercontent/FilterContent"
import { useContext } from "react";
import { myContext } from "../../../context/MyApiContextProvider";

export default function VerticalFilters(){
    const {state: {brand}} = useContext(myContext);
    const {setParameterFilter} = useContext(myContext);
    const {parameterFilter} = useContext(myContext);

    const setParameterFilterInComponent = (param) => {
        if(!parameterFilter.brand.includes(param)){
            setParameterFilter({
                ...parameterFilter,
                brand: [...parameterFilter.brand, ...param],
              });
            console.log(parameterFilter);
        } else {console.log("existe deja")}

    }


    return(
        <div className="w-[300px] border border-1 border-slate-300 flex flex-col">
            <FilterContent title={"Marques"} content={brand} filter={setParameterFilterInComponent}/>
            <FilterContent title={"Marques"} content={brand} filter={setParameterFilterInComponent}/>
        </div>
    )
}