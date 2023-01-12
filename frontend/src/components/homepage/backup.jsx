import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import panier from "/src/assets/images/paniers/panier.png";
import ProductCard from "./Item";
import { useContext } from "react";
import { myContext } from "../../context/MyContextProvider";

export default function Carousel(props){
  
    const { fruits, legumes } = useContext(myContext);
    const [carouselWidth, setCarouselWidth] = useState(1152);
    const carouselRef = useRef(null);
    const productCardRefs = Array.from({ length: 16 }, (_, i) => useRef(null));

    function MyProductCardList() {
      let myList = [];
      // Check si la variable fruits existe et contient des éléments
      if (fruits && fruits.length > 0) {
        console.log(fruits);
        for (let i = 0; i <= 16; i++) {
          let width = "w-["+(carouselWidth/4)+"px]";

          myList.push(
            <li key={i} className={` ${width} multi-carousel`} ref={productCardRefs[i]}>
              <ProductCard />
            </li>
          );
        }
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

        const id = parseInt(event.target.id);
        const multiCarousel = document.querySelectorAll('.multi-carousel');
        let translateX = id*((carouselRef.current.offsetWidth/4)*4);
        multiCarousel.forEach(element => {
            element.style.transform = 'translateX(-' + translateX + 'px)';
        });
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <span className="hidden sm:block font-bold text-xl underline underline-offset-4 mb-5">FRUITS DE SAISON</span>
            <div className="carousel" ref={carouselRef}>
                <div className="slide ">
                     <MyProductCardList />
                </div>
            </div>
            <div className="hidden sm:inline-flex carrousel_radio flex flex-row items-center justify-around w-[130px] mt-8">
                <input type="radio" name='carrousel' id="0" onChange={(e)=>getInputId(e)} /> 
                <input type="radio" name='carrousel' id="1" onChange={(e)=>getInputId(e)} />
                <input type="radio" name='carrousel' id="2" onChange={(e)=>getInputId(e)} />
                <input type="radio" name='carrousel' id="3" onChange={(e)=>getInputId(e)} />
            </div>

            <div className="flex flex-col items-center justify-around h-[390px] p-10 border border-slate-400 border-1 w-full border-r-0 border-l-0 mt-3 sm:hidden">
              <span className="font-bold text-xl underline underline-offset-4">FRUITS DE SAISON</span>
              <img src={panier} className="w-[200px]"></img>
              <button className="bg-slate-800 text-white font-semibold rounded-lg pr-5 pl-5 p-2">Accéder au magasin</button>
            </div>
        </div>
    )
};
