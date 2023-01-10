import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Carousel(props){
    const [carouselWidth, setCarouselWidth] = useState(1152);
    const carouselRef = useRef(null);
    const productCardRefs = [];

    const setProductCardsRef = () => {
        for(let i = 1; i<= 16; i++) {
            productCardRefs.push(useRef(null))
        }
    }

    setProductCardsRef();

    function MyProductCardList() {
        const myList = [];
        for (let i = 0; i <= 16; i++) {
          let width = "w-["+(carouselWidth/4)+"px]";
          console.log("width "+width)
          myList.push(
            <li key={i} className={` ${width} multi-carousel`} ref={productCardRefs[i]}>
              <ProductCard />
            </li>
          );
        }
        return myList;
      }


      // Update carousel data based on screen resolution
      useEffect(() => {
        setCarouselWidth(carouselRef.current.offsetWidth);
        productCardRefs.forEach(element => {
          element.current.style.width = Math.ceil((carouselRef.current.offsetWidth)/4)+"px";
        });
        function updateWidth() {
          productCardRefs.forEach(element => {
            element.current.style.width = Math.ceil((carouselRef.current.offsetWidth)/4)+"px";
          });
        }
    
        window.addEventListener('resize', updateWidth);
    
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, [productCardRefs]);

    const getInputId = (event) => {
        const multiCarousel = document.querySelectorAll('.multi-carousel');
        const id = parseInt(event);
        let translateX = id*((carouselRef.current.offsetWidth/4)*4);
        multiCarousel.forEach(element => {
            element.style.transform = 'translateX(-' + translateX + 'px)';
        });
    }


    return(
        <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-xl">FRUITS DE SAISON</span>
            <div className="carousel" ref={carouselRef}>
                <div className="slide">
                     <MyProductCardList />
                </div>
            </div>
            <div className="carrousel_radio flex flex-row items-center justify-around w-[130px] mt-8">
                <input type="radio" name='carrousel' id="0" onChange={e=>getInputId(e.target.id)} />
                <input type="radio" name='carrousel' id="1" onChange={e=>getInputId(e.target.id)}/>
                <input type="radio" name='carrousel' id="2" onChange={e=>getInputId(e.target.id)}/>
                <input type="radio" name='carrousel' id="3" onChange={e=>getInputId(e.target.id)}/>
            </div>
        </div>
    )
};
