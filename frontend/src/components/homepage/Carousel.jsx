import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import Item from "./Item";
import arrowLeft from '../../assets/images/icons/arrow-left.svg';
import arrowRight from '../../assets/images/icons/arrow-right.svg';
export default function Carousel(props){
  // actualiser la taille du carousel
  // en fonction de la taille du carousel
      //->mettre à jour le nombre d'élement product // et leurs tailles
      //-> au dessus de md => 16 (4 par carousel)
      //<- en dessous de md => 8 (2 par carousel)
        //-> mettre en hidden la moitié des products

  const itemsRef = Array.from({length: 16}, (_,i) => useRef(null));
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(null);
  const [translateX, setTranslateX] = useState(null);

  const updateCarouselWidthOnResize = () => {
          setCarouselWidth(carouselRef.current.offsetWidth); 
  }


  function MyItems() {
    let myList = [];
    for(let i=0; i<=itemsRef.length; i++){
      if(i<8){
        myList.push(
          <li key={i} className={`hidden md:inline-flex transition-all duration-150 ease-in-out border`} ref={itemsRef[i]}>
            <Item />
          </li>
        );
      } else {
        myList.push(
          <li key={i} className={`border transition-all duration-150 ease-in-out`} ref={itemsRef[i]}>
            <Item />
          </li>
        );
      }
    }
    return myList;
  }


  const translateItemByInputRadio = (event) =>  {
    const inputID = parseInt(event.target.id);

    itemsRef.forEach(item => {
      item.current.style.transform = 'translateX(-' + inputID*(item.current.offsetWidth) + 'px';
    });
  }

  const updateItemsWidth = () => {
    itemsRef.forEach(element => {
      if(carouselRef.current.offsetWidth<400){
        element.current.style.width = Math.ceil(carouselRef.current.offsetWidth)+"px";
      } else if (carouselRef.current.offsetWidth>400 && carouselRef.current.offsetWidth<768)
      {
        element.current.style.width = Math.ceil((carouselRef.current.offsetWidth)/2)+"px";
      } else if (carouselRef.current.offsetWidth>768)
      {
        element.current.style.width = Math.ceil((carouselRef.current.offsetWidth)/4)+"px";
      };
    });
  }

  useEffect(()=>{
    // initalisation carousel useState
    setCarouselWidth(carouselRef.current.offsetWidth);   
    // initialisation items width
    updateItemsWidth();
    // update carousel useState
    window.addEventListener('resize', updateCarouselWidthOnResize);

    // stop eventListener after work
    return () => {
      window.removeEventListener('resize', updateCarouselWidthOnResize);
    };
  })



    return(
        <div className="w-full flex flex-col justify-center items-center">
            <div className="carousel flex flex-row max-w-[1148px] w-[100%] h-[300px] overflow-hidden h-[300px] " ref={carouselRef}>
                <button className="z-10 absolute self-center left-[-50px] rounded-full w-[100px] h-[200px] bg-slate-900 md:hidden">
                  <img src={arrowLeft} className="absolute right-0 self-center translate-y-[-50%] w-[50px]"></img>
                </button>
                <button className="z-10 absolute self-center right-[-50px] rounded-full w-[100px] h-[200px] bg-slate-900 md:hidden">
                  <img src={arrowRight} className="absolute self-center translate-y-[-50%] w-[50px]"></img>
                </button>
              <div className="flex flex-row relative z-0">
                <MyItems />
              </div>
            </div>
            <div className="hidden md:inline-flex carrousel_radio flex flex-row items-center justify-around w-[130px] mt-8">
                <input type="radio" name='carrousel' id="0" onChange={(e)=>translateItemByInputRadio(e)} /> 
                <input type="radio" name='carrousel' id="1" onChange={(e)=>translateItemByInputRadio(e)} />
                <input type="radio" name='carrousel' id="2" onChange={(e)=>translateItemByInputRadio(e)} />
                <input type="radio" name='carrousel' id="3" onChange={(e)=>translateItemByInputRadio(e)} />
            </div>
        </div>
    )
};
