import React from "react";
import banane from "/src/assets/images/products/banane.png";

const ProductCard = (props) => (
    <div className="w-[250px] h-[365px] bg-gradient-to-b border border-1 border-t-0 rounded-lg border-black flex flex-col items-center justify-around relative">
        <img src={banane} className="w-[150px] h-[133px]"/>
        <div className="flex flex-col items-center justify-center">
            <span>FRUITS</span>
            <span>Origine Sarthe</span>
            <div className="h-[1px] bg-black w-[100px]"></div>
            <span>1.45/kg</span>
        </div>
    </div>
);

export default ProductCard;