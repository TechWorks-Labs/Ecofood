import React from "react";
import banane from "/src/assets/images/products/banane.png";

const Item = (props) => (
    <div className={`w-full h-full border border-1 border-slate-200 shadow-lg flex flex-col items-center justify-around relative`}>
        <img src={banane} className="w-[100px]"/>
        <div className="flex flex-col h-[100px] items-center justify-center">
            <span className="font-medium tracking-widest">{props.name}</span>
            <span className="mb-3">Origine {props.origin}</span>
            <div className="h-[1px] bg-[#B4B4B4] w-[200px]"></div>
            <span className="font-bold text-[#B4B4B4] mt-3">{props.weight}/kg</span>
        </div>
    </div>
);

export default Item;