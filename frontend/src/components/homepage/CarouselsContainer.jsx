import React from "react";
import Carousel from "./Carousel";
import { useContext } from "react";
import { myContext } from "../../context/MyApiContextProvider";

export default function CarouselsContainer(props){
    const { state } = useContext(myContext);
    console.log(state);
    const fruits = state.fruits;
    const vegetable = state.fruits;
    const meat = state.fruits;
    return(
        <div>
            <div className="w-full bg-[#F7F7F7] mb-[60px] p-5">
                <div className=" mx-auto flex flex-col items-center justify-around min-w-[300px] max-w-7xl">
                    <Carousel itemsProduct={fruits} title={"FRUITS DE SAISON"} inputName={'carouselFruit'} />
                </div>
            </div>
            <div className="w-full bg-white p-5">
                <div className=" mx-auto flex flex-col items-center justify-around min-w-[300px] max-w-7xl">
                <Carousel itemsProduct={vegetable} title={"LEGUMES DU JARDIN"} inputName={'carouselVegetable'} />
                </div>
            </div>
            <div className="w-full bg-[#F7F7F7] p-5">
                <div className=" mx-auto flex flex-col items-center justify-around min-w-[300px] max-w-7xl">
                    <Carousel itemsProduct={meat} title={"VIANDES LOCALES"} inputName={'carouselMeat'} />
                </div>
            </div>
        </div>
    )
};
