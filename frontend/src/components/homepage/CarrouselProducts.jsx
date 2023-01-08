import React from "react";
import Carrousel from "./Carrousel";

const CarrouselProduct = (props) => (
    <div className="min-w-[400px] max-w-6xl mx-auto flex flex-row p-10">
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Carrousel />
    </div>
);

export default CarrouselProduct;