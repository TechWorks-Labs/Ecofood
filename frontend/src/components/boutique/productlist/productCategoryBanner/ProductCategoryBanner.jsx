import { useRef } from "react";

export default function ProductCategoryBanner(){
    const containerCategoryRef = useRef();

    const handleCategory = (event) => {
        const target = event.target;
        target.classList.remove("productCategoryIsNotToggle");
        target.classList.add("productCategoryIsToggle");

        Array.from(containerCategoryRef.current.children).forEach((child) => {
            if(child != target){
                child.classList.remove("productCategoryIsToggle");
                child.classList.add("productCategoryIsNotToggle");
            }    
        });
    }

    return(
        <div className="h-[45px] w-full flex flex-row gap-x-5 mt-5" ref={containerCategoryRef} >
            <span onClick={(e)=>handleCategory(e)} data-type="1" className="productCategoryIsNotToggle">FRUITS</span>
            <span onClick={(e)=>handleCategory(e)} data-type="2" className="productCategoryIsNotToggle">LEGUMES</span>
            <span onClick={(e)=>handleCategory(e)} data-type="3"className="productCategoryIsNotToggle">VIANDES</span>
            <span onClick={(e)=>handleCategory(e)} data-type="4" className="productCategoryIsNotToggle">PANIERS</span>
        </div>
    )
}