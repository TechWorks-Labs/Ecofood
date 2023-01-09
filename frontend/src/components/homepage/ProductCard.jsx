import React from "react";
import banane from "/src/assets/images/products/banane.png";

const ProductCard = (props) => (
    <div className={`w-full h-[365px] border border-1 border-slate-200 shadow-lg flex flex-col items-center justify-around relative`}>
        <img src={banane} className="w-[100px]"/>
        <div className="flex flex-col items-center justify-center">

            <span>Origine Sarthe</span>
            <div className="h-[1px] bg-black w-[100px]"></div>
            <span>1.45/kg</span>
        </div>
    </div>
);

export default ProductCard;