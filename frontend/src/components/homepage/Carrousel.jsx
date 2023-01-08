import React from "react";
import ProductCard from "./ProductCard";

const Carrousel = (props) => (
    <div className="w-full h-[400px] flex flex-col items-center justify-center">
        <span>FRUITS DE SAISON</span>
        <div className="flex flex-row items-center justify-center">
            <ProductCard />
        </div>
    </div>
);

export default Carrousel;