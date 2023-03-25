import React from "react";
import ButtonCartOfDay from "../button/ButtonCartOfDay";
import background from "/src/assets/images/background/backgroundEcofood.png";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ecofoodAnimated from '../../assets/animated/animacaodentro.json';
import { gsap, Bounce } from "gsap";
import { useRef, useEffect } from "react";

export default function HeroBanner(props) {
    const lettersRef = useRef([]);
    const ecofoodRef = useRef();
    const bannerRef = useRef();
    const title = 'ECOFOOD';
    const letterArray = Array.from(title).map((letter, index) => (
        <span key={index} ref={el => lettersRef.current[index] = el} className="inline-block mr-1">{letter}</span>
    ));

    useEffect(() => {
        console.log('Animation started'); // Vérifiez que l'animation a commencé
        gsap.from(lettersRef.current, {
            duration: 0.8,
            y: -50,
            opacity: 0,
            stagger: 0.1,
            ease: Bounce.easeOut,
        });
        gsap.from(bannerRef.current, {
            duration: 0.8,
            y: -50,
            opacity: 0,
        });
    }, []);




    return (
        <div className="min-w-[300px] max-w-6xl h-[600px] mx-auto flex flex-row justify-center items-center p-10">

            <div ref={bannerRef} className="p-5 flex flex-col gap-y-8 justify-around">
                <h1 className="text-5xl font-bold text-slate-800 underline-offset-2 md:text-6xl lg:text-7xl">{letterArray}</h1>
                <span className="text-[0.9rem]">ECOFOOD est le site de vente en ligne idéal pour acheter des légumes et des fruits biologiques
                    de qualité supérieure, issus d'une agriculture locale durable. Notre large gamme de produits
                    biologiques et notre processus de commande facile vous permettent de remplir votre panier d'épicerie
                    en toute simplicité.
                </span>

                <ButtonCartOfDay css={"self-center md:self-start"} />
            </div>

            <Player
                autoplay
                speed={1}
                loop={false}
                keepLastFrame
                src={ecofoodAnimated}
                style={{ width: "500px" }}
            >
            </Player>
        </div>
    )
};

