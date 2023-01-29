import React from "react";
import banane from "/src/assets/images/products/banane.png";
import shop from "/src/assets/images/icons/shopping-bag-header.svg";

const Item = (props) => (
    <div className={`w-full h-full bg-white shadow-lg flex flex-col items-center justify-around relative`}>
        <img src={banane} className="w-[100px]"/>
        <div className="flex flex-col h-[150px] items-center justify-center">
            <span className="font-medium tracking-widest">{props.name}</span>
            <span className="mb-3">Origine {props.origin}</span>
            <div className="h-[0.8px] bg-[#B4B4B4] w-[200px]"></div>
            <span className="font-bold text-[#B4B4B4] mt-3">{props.weight}/kg</span>
            <div className="w-full">
                <button className="bg-[#EC3434] rounded-lg p-1 float-right">
                    <img src={shop} className="w-[35px] "></img>
                </button>
            </div>
        </div>
    </div>
);

export default Item;