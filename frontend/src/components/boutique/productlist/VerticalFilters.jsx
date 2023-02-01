import FilterContent from "./filtercontent/FilterContent"

export default function VerticalFilters(){
    const brands = ["Pepito","Mousaka","Perfect"];

    return(
        <div className="w-[300px] border border-1 border-slate-300 flex flex-col">
            <FilterContent title={"Marques"} content={brands}/>
            <FilterContent title={"Marques"} content={brands}/>
        </div>
    )
}