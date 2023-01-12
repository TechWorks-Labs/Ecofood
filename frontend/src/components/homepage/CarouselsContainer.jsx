import React from "react";
import Carousel from "./Carousel";

export default function CarouselsContainer(props){

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Carousel itemsProductType={1}/>
        </div>
    )
};
