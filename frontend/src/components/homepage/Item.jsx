import React from "react";
import banane from "/src/assets/images/products/banane.png";

const Item = (props) => (
    <div className={`w-full h-full border border-1 border-slate-200 shadow-lg flex flex-col items-center justify-around relative`}>
        <img src={banane} className="w-[100px]"/>
        <div className="flex flex-col items-center justify-center">

            <span>{props.origin}</span>
            <div className="h-[1px] bg-black w-[100px]"></div>
            <span>{props.weight}/kg</span>
        </div>
    </div>
);

export default Item;