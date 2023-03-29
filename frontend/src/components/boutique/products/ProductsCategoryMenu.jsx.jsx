import { useRef } from "react";
import { useContext } from "react";
import { productsContext } from "../../../context/ProductsProvider";

export default function ProductsCategoryMenu(){

    const {setParameterFilter} = useContext(productsContext);
    const {parameterFilter} = useContext(productsContext);
    const containerCategoryRef = useRef();

    const handleSetProductType = (pType) => {
            if(!parameterFilter.type.includes(pType)){
                setParameterFilter({
                    ...parameterFilter,
                    type: [...parameterFilter.type, pType],
                  });
            } else {
                const newParameterFilter = parameterFilter.type.filter((type) => type !== pType);
                setParameterFilter({
                    ...parameterFilter,
                    type: newParameterFilter,
                  });
            };
    }
    

    const buttonCategoryIsToggle = (target) => {
        if(target.classList[0] === 'productCategoryIsToggle'){
            return true;
        }
        return false;
    }

    const buttonCategoryModifyClassListIsNotToggle = (target) => {
        target.classList.remove("productCategoryIsToggle");
        target.classList.add("productCategoryIsNotToggle");
    }
    const buttonCategoryModifyClassListIsToggle = (target) => {
        target.classList.remove("productCategoryIsNotToggle");
        target.classList.add("productCategoryIsToggle");
    }

    const handleCategory = (event) => {
        const target = event.target;
        if(buttonCategoryIsToggle(target)){
            buttonCategoryModifyClassListIsNotToggle(target);
        } else {
            buttonCategoryModifyClassListIsToggle(target);
        }
        handleSetProductType(target.dataset.type);
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