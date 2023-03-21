import React from "react";
import banane from "/src/assets/images/products/banane.png";
import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import ButtonShop from "../button/ButtonShop";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Item(props){
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate('/product', {state : props.product});
    }

    return(
        <div onClick={handleProduct} className={`w-full h-full bg-white  border border-1 border-slate-200 shadow-lg flex flex-col items-center justify-around relative transition-300 duration-300 hover:scale-105 hover:z-50 hover:border-slate-300`}>
            <img src={banane} className="w-[100px]"/>
                <div className="flex flex-col h-[150px] w-full items-center justify-center p-4">
                    <span className="font-medium tracking-widest">{props.name}</span>
                    <span className="mb-3">Origine {props.origin}</span>

                    <span className="font-bold text-[#B4B4B4] mt-3">{props.weight}/kg</span>

                    <div className="w-full mt-2">
                        <div className="float-right flex flex-row gap-x-3 items-center">
                            <div className="flex flex-col items-center justify-center mb-2">
                                <span className="text-[#EC3434] font-bold text-lg">10,07 $</span>
                                <span className="text-sm">{props.weight}/Kg</span>
                            </div>
                            <ButtonShop id_product = {props.id_product} product={props.product} />
                        </div>
                    </div>
                </div>
        </div>
    )
}

