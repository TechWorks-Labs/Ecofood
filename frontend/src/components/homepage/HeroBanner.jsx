import React from "react";
import ButtonCartOfDay from "../button/ButtonCartOfDay";
import background from "/src/assets/images/background/backgroundEcofood.png";

export default function HeroBanner(props){

    return(
            <div className="min-w-[300px] max-w-6xl h-[600px] mx-auto flex flex-row justify-center items-center p-10">

            <div className="p-5 flex flex-col gap-y-8 justify-around">
                <h1 className="text-5xl font-bold text-slate-800 underline-offset-2 md:text-6xl lg:text-7xl">ECOFOOD</h1>
                <span className="text-[0.9rem]">ECOFOOD est le site de vente en ligne idéal pour acheter des légumes et des fruits biologiques 
                    de qualité supérieure, issus d'une agriculture locale durable. Notre large gamme de produits 
                    biologiques et notre processus de commande facile vous permettent de remplir votre panier d'épicerie
                    en toute simplicité.
                </span>
                    
                <ButtonCartOfDay css={"self-center md:self-start"}/>
            </div>

            <img src={background} className="hidden md:inline-flex md:w-[450px] lg:w-[600px]"></img>
        </div>
    )
};

