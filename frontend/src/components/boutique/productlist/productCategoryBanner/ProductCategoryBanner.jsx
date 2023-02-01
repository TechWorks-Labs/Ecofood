
export default function ProductCategoryBanner(){


    return(
        <div className="h-[45px] w-full flex flex-row gap-x-5 mt-5" >
            <span onClick={(e)=>handleInputIsToggle(e)} className="category border border-1 border-slate-300 p-2">FRUITS</span>
            <span onClick={(e)=>handleInputIsToggle(e)} className="category border border-1 border-slate-300 p-2">LEGUMES</span>
            <span onClick={(e)=>handleInputIsToggle(e)} className="category border border-1 border-slate-300 p-2">VIANDES</span>
            <span onClick={(e)=>handleInputIsToggle(e)} className="category border border-1 border-slate-300 p-2">PANIERS</span>
        </div>
    )
}