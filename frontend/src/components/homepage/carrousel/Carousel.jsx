import React from "react";
import { useState } from "react";
import { useRef, useEffect, useMemo } from "react";
import Item from "../../product/ProductCard";
import arrowLeft from '../../../assets/images/icons/arrow-left.svg';
import arrowRight from '../../../assets/images/icons/arrow-right.svg';
import ButtonConsult from "../../button/ButtonConsult";

export default function Carousel(props) {
  const itemsRef = Array.from({ length: 16 }, (_, i) => useRef(null));
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(null);
  const [isPositioned, setIsPositioned] = useState(false);
  const [displayFormat, setDisplayFormat] = useState();

  const updateCarouselWidthOnResize = () => {
    setCarouselWidth(carouselRef.current.offsetWidth);
    updateItemsWidth();
  }

  const updateItemsWidth = () => {
    if (Boolean(props.itemsProduct.length) && Boolean(carouselRef.current.offsetWidth)) {
      let width = getItemsWidth();
      itemsRef.forEach(element => {
        element.current.style.width = width + "px";
      });
    }
  };

  const UpdateStateDisplayFormat = () => {
    const width = carouselRef.current.offsetWidth;
    const displayFormat = width < 640
      ? 'mobile'
      : width < 1024
        ? 'tablet'
        : width > 1024 && 'desktop';
    setDisplayFormat(displayFormat);
  };



  const getItemsWidth = () => {
    let width = null;
    if (carouselRef.current.offsetWidth < 640) {
      width = Math.ceil(carouselRef.current.offsetWidth) - 16;
    } else if (carouselRef.current.offsetWidth >= 640 && carouselRef.current.offsetWidth < 1024) {
      width = Math.ceil((carouselRef.current.offsetWidth) / 2) - 8;
    } else if (carouselRef.current.offsetWidth >= 1024) {
      width = Math.ceil((carouselRef.current.offsetWidth) / 4) - 4;
    };

    return width;
  }

  const Products = () => {
    if (Boolean(props.itemsProduct.length) && Boolean(carouselRef.current.offsetWidth)) {
      // width renvoie bien une valeur numérique correct
      let width = getItemsWidth();
      return props.itemsProduct.map((item, key) => {
        if (displayFormat === 'mobile' && key == 0) {
          return (
            <li key={key} style={{ width: `${width}px` }} className={`md:inline-flex list-none transition-transform duration-150 ease-in-out border`} ref={itemsRef[key]}>
              <Item product={item} />
            </li>
          )
        } else if (displayFormat === 'tablet' && key < 2) {
          return (
            <li key={key} style={{ width: `${width}px` }} className={`md:inline-flex list-none transition-transform duration-150 ease-in-out border`} ref={itemsRef[key]}>
              <Item product={item} />
            </li>
          )
        } else if (displayFormat === 'desktop' && key < 4) {
          return (
            <li key={key} style={{ width: `${width}px` }} className={`md:inline-flex list-none transition-transform duration-150 ease-in-out border`} ref={itemsRef[key]}>
              <Item product={item} />
            </li>
          )
        }

        else {
          return (
            <li key={key} style={{ width: `${width}px`, visibility: 'hidden' }} className={`list-none border transition-transform duration-150 ease-in-out`} ref={itemsRef[key]}>
              <Item product={item} />
            </li>
          )
        }
      });
    }
  };

  const hiddenStartProductNumber = (id) => {
    let start = null;
    if (displayFormat === 'mobile') {
      start = id * 1;
    } else if (displayFormat === 'tablet') {
      start = id * 2;
    } else if (displayFormat === 'desktop') {
      start = id * 4;
    }
    return start;
  }

  const hiddenEndProductNumber = (id) => {
    let end = null;
    if (displayFormat === 'mobile') {
      end = (id * 1);
    } else if (displayFormat === 'tablet') {
      end = (id * 2) + 1;
    } else if (displayFormat === 'desktop') {
      end = (id * 4) + 3;
    }
    return end;
  }


  const isProductCardHidden = (ID, key) => {
    const startHidden = hiddenStartProductNumber(ID);
    const endHidden = hiddenEndProductNumber(ID);
    if (key >= startHidden && key <= endHidden) {
      return false;
    }
    return true;
  }

  const translateXProduct = (id, widthProduct) => {
    let translate = null;
    if (displayFormat === 'mobile') {
      translate = 'translateX(-' + id * (1 * widthProduct) + 'px';
    } else if (displayFormat === 'tablet') {
      translate = 'translateX(-' + id * (2 * widthProduct) + 'px';
    } else if (displayFormat === 'desktop') {
      translate = 'translateX(-' + id * (4 * widthProduct) + 'px';
    }
    return translate;
  }

  const translateItemByInputRadio = (e) => {
    const inputID = parseInt(e.target.id);
    let productWidth = null;
    itemsRef.forEach((item, key) => {
      productWidth = item.current.offsetWidth;
      if (isProductCardHidden(inputID, key)) {
        item.current.style.visibility = "hidden";
      } else {
        item.current.style.visibility = "visible";
      }
      item.current.style.transform = translateXProduct(inputID, productWidth);
    });
  }


  useEffect(() => {
    // initalisation carousel useState
    setCarouselWidth(carouselRef.current.offsetWidth);
    UpdateStateDisplayFormat();
    window.addEventListener('resize', updateCarouselWidthOnResize);
    window.addEventListener('resize', UpdateStateDisplayFormat);

    return () => {
      // window.removeEventListener('resize', updateCarouselWidthOnResize);
    };
  })

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <span className="font-medium text-2xl underline underline-offset-4 mb-5">{props.title}</span>
      <div className="carousel flex flex-row max-w-[1148px] w-[100%] h-[350px] p-2  overflow-hidden" ref={carouselRef}>

        {/* <div className="flex flex-row relative z-0">
          {(Boolean(props.itemsProduct.length) && Boolean(carouselRef.current.offsetWidth)) ?
            // <div className="animate-pulse grid grid-cols-3 gap-x-10 w-full h-full border-[10px] border-slate-300 rounded-xl p-10">
            //   <div className="bg-slate-300 rounded-xl"></div>
            //   <div className="bg-slate-300"></div>
            //   <div className="bg-slate-300"></div>
            // </div>
            <Products />
            :
            <div className="w-full h-full flex justify-center items-center bg-red-400">
              <span className="mx-auto w-[30px] h-[30px] bg-red-400">en attente</span>
            </div>}
        </div> */}

        {(Boolean(props.itemsProduct.length) && Boolean(carouselRef.current.offsetWidth)) ?
          <div className="flex flex-row relative z-0">
            <Products /> */

          </div>
          :
          <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full rounded-xl">

            <div className="flex flex-col justify-center items-center rounded-xl p-2">
              <div className="bg-slate-300 w-full h-full rounded-xl"></div>
            </div>
            <div className="hidden sm:visible sm:flex justify-center items-center rounded-xl p-2">
              <div className="bg-slate-300 w-full h-full rounded-xl"></div>
            </div>
            <div className="hidden lg:visible lg:flex lg:flex-col justify-center items-center rounded-xl p-2">
              <div className="bg-slate-300 w-full h-full rounded-xl"></div>
            </div>
            <div className="hidden lg:visible lg:flex flex-col justify-center items-center rounded-xl p-2">
              <div className="bg-slate-300 w-full h-full rounded-xl"></div>
            </div>


          </div>
        }

      </div>
      <div className=" md:inline-flex carrousel_radio flex flex-row items-center justify-around w-[140px] mt-8">

        <input type="radio"
          className="carousel-input"
          name={props.inputName}
          defaultChecked
          id="0"
          onChange={(e) => translateItemByInputRadio(e)}
        />


        <input type="radio"
          className="carousel-input"
          name={props.inputName}
          id="1"
          onChange={(e) => translateItemByInputRadio(e)}
        />

        <input type="radio"
          className="carousel-input"
          name={props.inputName}
          id="2"
          onChange={(e) => translateItemByInputRadio(e)}
        />
        <input type="radio"
          className="carousel-input"
          name={props.inputName}
          id="3"
          onChange={(e) => translateItemByInputRadio(e)}
        />

      </div>
      <ButtonConsult filterProduct={props.filterProduct} />
    </div>
  )
};