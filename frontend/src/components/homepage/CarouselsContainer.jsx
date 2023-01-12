import React from "react";
import Carousel from "./Carousel";
import { useContext } from "react";
import { myContext } from "../../context/MyContextProvider";

export default function CarouselsContainer(props){
    const { fruits, vegetable } = useContext(myContext);
    return(
        <div className=" mx-auto flex flex-col items-center justify-center min-w-[300px] max-w-7xl">
            <Carousel itemsProduct={fruits} title={"FRUITS DE SAISON"} />
        </div>
    )
};
