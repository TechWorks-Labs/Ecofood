import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
<<<<<<< HEAD
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
=======
import Item from "./Item";
import arrowLeft from '../../assets/images/icons/arrow-left.svg';
import arrowRight from '../../assets/images/icons/arrow-right.svg';

export default function Carousel(props) {
  const itemsRef = Array.from({ length: 16 }, (_, i) => useRef(null));
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(null);

  const updateCarouselWidthOnResize = () => {
    setCarouselWidth(carouselRef.current.offsetWidth);
  }

  const MyItems = () => {
    return props.itemsProduct.map((item, key) => {
      if (key<8){
        return (
          <li key={key} className={`hidden md:inline-flex list-none transition-transform duration-150 ease-in-out border`} ref={itemsRef[key]}>
            <Item origin={item.origin} weight={item.weight} name={item.name} />
          </li>
        )
      } else {
        return (
          <li key={key} className={`list-none border transition-transform duration-150 ease-in-out`} ref={itemsRef[key]}>
            <Item origin={item.origin} weight={item.weight} name={item.name} />
          </li>
        )
      }
    });
  }
 

  const translateItemByInputRadio = (event) => {
    const inputID = parseInt(event.target.id);

    itemsRef.forEach(item => {
      item.current.style.transform = 'translateX(-' + inputID * (item.current.offsetWidth) + 'px';
    });
  }

  const updateItemsWidth = () => {
    if(props.itemsProduct.length>0){
      itemsRef.forEach(element => {
        if (carouselRef.current.offsetWidth < 400) {
          element.current.style.width = Math.ceil(carouselRef.current.offsetWidth) + "px";
        } else if (carouselRef.current.offsetWidth > 400 && carouselRef.current.offsetWidth < 768) {
          element.current.style.width = Math.ceil((carouselRef.current.offsetWidth) / 2) + "px";
        } else if (carouselRef.current.offsetWidth > 768) {
          // console.log("element.current.style.width"+element.current.style.width);
          element.current.style.width = Math.ceil((carouselRef.current.offsetWidth) / 4) + "px";
        };
      });
    }
  }


  useEffect(() => {
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

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <span className="font-medium text-2xl underline underline-offset-4 mb-5">{props.title}</span>
      <div className="carousel flex flex-row max-w-[1148px] w-[100%] h-[350px] overflow-hidden " ref={carouselRef}>
        <button className="z-10 absolute self-center left-[-60px] rounded-full w-[100px] h-[150px]  border border-slate-200 bg-white shadow-lg md:hidden">
          <img src={arrowLeft} className="absolute right-0 self-center translate-y-[-50%] w-[40px]"></img>
        </button>
        <button className="z-10 absolute self-center right-[-60px] rounded-full w-[100px] h-[150px] border border-slate-200 bg-white shadow-lg md:hidden">
          <img src={arrowRight} className="absolute self-center translate-y-[-50%] w-[40px]"></img>
        </button>
        <div className="flex flex-row relative z-0">
        <MyItems />
        </div>
      </div>
      <div className="hidden md:inline-flex carrousel_radio flex flex-row items-center justify-around w-[140px] mt-8">
        <input type="radio" name={props.inputName} id="0" className="bg-red-400" onChange={(e) => translateItemByInputRadio(e)} />
        <input type="radio" name={props.inputName} id="1" onChange={(e) => translateItemByInputRadio(e)} />
        <input type="radio" name={props.inputName} id="2" onChange={(e) => translateItemByInputRadio(e)} />
        <input type="radio" name={props.inputName} id="3" onChange={(e) => translateItemByInputRadio(e)} />
      </div>
      <button className="bg-[#EC3434] w-[160px] h-[45px] text-[0.9rem] p-2 rounded-lg text-white mt-5">TOUT CONSULTER</button>
    </div>
  )
};
>>>>>>> 305a4a16de21b927128c052e90c44e2d1697d574
