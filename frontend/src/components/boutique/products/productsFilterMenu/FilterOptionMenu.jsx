import { useMemo } from "react";
export default function FilterOptionMenu(props){
    const FilterOptionMenu = props.content;

    const toggleClass = (event) => {
        event.target.classList.toggle("bg-slate-700");
        event.target.classList.toggle("text-white");
    };
    
    const addFilter = (event, { filter, setFilter }, filterName) => {
        const newFilter = [...filter[filterName], event.target.dataset.id];
        setFilter({ ...filter, [filterName]: newFilter });
    };
    
    const removeFilter = (event, {filter, setFilter}, filterName) => {
        const newFilter = filter[filterName].filter(element => element !== event.target.dataset.id);
        setFilter({ ...filter, [filterName]: newFilter});
    }

    
    const handleModifyStatus = (event) => {
        toggleClass(event);
        if (!props.filter[props.filterName].includes(event.target.dataset.id)) {
            addFilter(event, props, props.filterName);
        } else {
            removeFilter(event, props, props.filterName);
        }
    };
    

    const MyFilterOptionMenu = useMemo(() => {
        return FilterOptionMenu.map((filter, key)=> {
            return <li data-id={props.content[key][props.filterId]} key={key} className="list-none hover:bg-slate-400 p-1 hover:cursor-pointer" onClick={(e) => handleModifyStatus(e)}>{props.content[key].name}</li>
        });})
    

    return(
        <div className="w-full p-4 border border-slate-400 border-t-0 border-l-0 border-r-0 border-b-1">
            <span className="font-bold text-lg">{props.title}</span>
            <div className="mt-3">
                {MyFilterOptionMenu}
            </div>
        </div>
    )
}