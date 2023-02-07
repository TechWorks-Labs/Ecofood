import { useMemo } from "react";
export default function FiltersContents(props){
    const FilterContent = props.content;

    const handleModifyStatus = (event) => {
        event.target.classList.toggle("bg-slate-700");
        event.target.classList.toggle("text-white");
        console.log("id "+event.target.dataset.id);
        if(!props.filter.brand.includes(event.target.dataset.id)){
            const newBrand = [...props.filter.brand, event.target.dataset.id];
            props.setFilter({ ...props.filter, brand: newBrand });
        } else {
            // supprimer la clef déjà contenu dans le brand
            const newBrand = [];
            props.filter.brand.forEach(element => {
                if(element !== event.target.dataset.id){
                    console.log(element+' est différent, donc je push');
                    newBrand.push(element);
                    console.log("new "+newBrand);
                }
            });
            props.setFilter({ ...props.filter, brand: newBrand });
        }
        console.log(props.filter)
    };
    

    const MyFilterContent = useMemo(() => {
        return FilterContent.map((filter, key)=> {
            return <li data-id={props.content[key].id_brand} key={key} className="list-none hover:bg-slate-400 p-1" onClick={(e) => handleModifyStatus(e)}>{props.content[key].name}</li>
        });})
    

    return(
        <div className="w-full p-4 border border-slate-400 border-t-0 border-l-0 border-r-0 border-b-1">
            <span className="font-bold text-lg">{props.title}</span>
            <div className="mt-3">
                {MyFilterContent}
            </div>
        </div>
    )
}