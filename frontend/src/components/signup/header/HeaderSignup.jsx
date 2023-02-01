import React from "react";

const HeaderSignUp = (props) => (
                <div className='w-full min-w-[300px] h-[70px] bg-slate-800 shadow-lg'>
                    <div className='max-w-7xl  h-full mx-auto flex flex-row relative'>

                        <div className='h-full absolute left-0 flex justify-center items-center p-3'>
                            <h1 className="text-white font-semibold text-xl">ECOFOOD</h1>
                        </div>

                        <div className='hidden sm:inline-flex w-[300px] lg:w-[600px] mx-auto flex flex-row items-center justify-around'>
                            <div className='flex justify-center items-center h-full'>
                                <div className={`rounded-full w-[20px] h-[20px] ${props.step === "signupPage" ? "bg-lime-500" : "bg-white"} flex justify-center items-center mr-2 p-3`}>
                                    <span className={`font-bold text-md ${props.step === "signupPage" ? "text-white" : "text-black"}`}>1</span>
                                </div>
                                <h1 className={`hidden lg:inline-flex ${props.step === "signupPage" ? "text-lime-500" : "text-white"} font-semibold text-md`}>Identifiant</h1>
                            </div>

                            <div className='h-[1px] w-full bg-slate-500 mr-3 ml-3'></div>

                            <div className='flex justify-center items-center h-full'>
                                <div className={`rounded-full w-[20px] h-[20px] ${props.step === "userInformations" ? "bg-lime-500" : "bg-white"} flex justify-center items-center mr-2 p-3`}>
                                    <span className={`font-bold text-md ${props.step === "userInformations" ? "text-white" : "text-black"}`}>2</span>
                                </div>
                                <h1 className={`hidden lg:inline-flex ${props.step === "userInformations" ? "text-lime-500" : "text-white"} font-semibold text-md`}>Informations personnelles</h1>
                            </div>

                            <div className='h-[1px] w-full bg-slate-500 mr-3 ml-3'></div>

                            <div className='flex justify-center items-center h-full'>
                                <div className={`rounded-full w-[20px] h-[20px] ${props.step === "address" ? "bg-lime-500" : "bg-white"} flex justify-center items-center mr-2 p-3`}>
                                    <span className={`font-bold text-md ${props.step === "address" ? "text-white" : "text-black"}`}>3</span>
                                </div>
                                <h1 className={`hidden lg:inline-flex ${props.step === "address" ? "text-lime-500" : "text-white"} font-semibold text-md`}>Coordonnées</h1>
                            </div>

                            <div className='h-[1px] w-full bg-slate-500 mr-3 ml-3'></div>

                            <div className='flex justify-center items-center h-full'>
                                <div className={`rounded-full w-[20px] h-[20px] ${props.step === "validation" ? "bg-lime-500" : "bg-white"} flex justify-center items-center mr-2 p-3`}>
                                    <span className={`font-bold text-md ${props.step === "validation" ? "text-white" : "text-black"}`}>3</span>
                                </div>
                                <h1 className={`hidden lg:inline-flex ${props.step === "validation" ? "text-lime-500" : "text-white"} font-semibold text-md`}>Validation</h1>
                            </div>
                        </div>
                    </div>
                </div>
);

export default HeaderSignUp;