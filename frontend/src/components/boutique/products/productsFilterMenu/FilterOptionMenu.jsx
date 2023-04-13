import { useMemo } from "react";

export default function FilterOptionMenu(props) {
    const FilterOptionMenu = props.content;

    const toggleClass = (event) => {
        event.target.classList.toggle("bg-slate-700");
    };

    const addFilter = (event, { filter, setFilter }, filterName) => {
        const newFilter = [...filter[filterName], event.target.dataset.id];
        setFilter({ ...filter, [filterName]: newFilter });
    };

    const removeFilter = (event, { filter, setFilter }, filterName) => {
        const newFilter = filter[filterName].filter(element => element !== event.target.dataset.id);
        setFilter({ ...filter, [filterName]: newFilter });
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
        return FilterOptionMenu.map((filter, key) => {
            return <li data-id={props.content[key][props.filterId]} key={key} className="list-none text-white hover:bg-[#19212D] p-1 hover:cursor-pointer" onClick={(e) => handleModifyStatus(e)}>{props.content[key].name}</li>
        });
    })


    return (
        <div className="w-full border border-slate-400 border-t-0 border-l-0 border-r-0 border-b-1 p-2">
            <div className="p-2 bg-[#394354] rounded-lg">
                <span className="font-bold text-lg  text-white">{props.title}</span>
            </div>

            <div className="mt-3 p-2 rounded-lg">
                {MyFilterOptionMenu}
            </div>
        </div>
    )
}