
export default function FiltersContents(props){
    const FilterContent = props.content;

    const handleModifyStatus = (event) => {
        event.target.classList.toggle("bg-slate-700")
        event.target.classList.toggle("text-white")
    }


    const MyFilterContent = () => {
        return FilterContent.map((filter, key)=> {
            return <li data-id={props.content[key]} key={key} className="list-none hover:bg-slate-400 p-1" onClick={(e)=>handleModifyStatus(e)}>{props.content[key]}</li>
        })
    }

    return(
        <div className="w-full p-4 border border-slate-400 border-t-0 border-l-0 border-r-0 border-b-1">
            <span className="font-bold text-lg">{props.title}</span>
            <div className="mt-3">
                <MyFilterContent />
            </div>
        </div>
    )
}