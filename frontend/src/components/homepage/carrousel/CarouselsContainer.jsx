import React from "react";
import Carousel from "./Carousel";
import { useContext, useRef, useEffect } from "react";
import { productsContext } from "../../../context/ProductsProvider";
import { gsap, Bounce } from "gsap";

export default function CarouselsContainer(props) {
    const { state } = useContext(productsContext);
    const fruits = state.fruits;
    const vegetables = state.vegetables;
    const meat = state.meat;

    return (
        <div className="w-full min-w-[300px]">
            <div className="w-full bg-[#E6EDF0]">
                <div className="mx-auto flex flex-col items-center justify-around min-w-[300px] max-w-7xl">
                    <Carousel itemsProduct={fruits} title={"FRUITS DE SAISON"} inputName={'carouselFruit'} filterProduct='1' />
                </div>
            </div>
            <div className="w-full bg-white">
            <div className="mx-auto flex flex-col items-center justify-around min-w-[300px] max-w-7xl">
                    <Carousel itemsProduct={vegetables} title={"LEGUMES DU JARDIN"} inputName={'carouselVegetable'} filterProduct='2' />
                </div>
            </div>
            <div className="w-full bg-[#E6EDF0]">
                <div className=" mx-auto flex flex-col items-center justify-around min-w-[300px] max-w-7xl">
                    <Carousel itemsProduct={meat} title={"VIANDES LOCALES"} inputName={'carouselMeat'} filterProduct='3' />
                </div>
            </div>
        </div>
    )
};
