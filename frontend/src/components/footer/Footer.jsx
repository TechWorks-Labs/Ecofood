import React from "react";

const Footer = (props) => (
    <div className="w-full min-w-[300px] bg-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col">
            <div className="flex flex-col sm:flex sm:flex-row justify-between pt-5 pb-5">

                <div className="justify-around w-full flex flex-row gap-x-5 sm:w-1/2 ">
                    <div className="flex flex-col gap-y-1">
                        <li className="text-[#ffffff] text-xl list-none underline underline-offset-2">Mentions légales</li>
                        <li className="text-[#ffffff] text-md list-none hover:underline hover:underline-offset-2">Contact</li>
                        <li className="text-[#ffffff] text-md list-none hover:underline hover:underline-offset-2">Politique de confidentialité</li>
                        <li className="text-[#ffffff] text-md list-none hover:underline hover:underline-offset-2">Service client</li>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <li className="text-[#ffffff] text-xl list-none underline underline-offset-2">Informations importantes</li>
                        <li className="text-[#ffffff] text-md list-none hover:underline hover:underline-offset-2">Conditions d'utilisation</li>
                        <li className="text-[#ffffff] text-md list-none hover:underline hover:underline-offset-2">Conditions de vente</li>
                        <li className="text-[#ffffff] text-md list-none hover:underline hover:underline-offset-2">Paiements et livraisons</li>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-5 sm:mt-0">

                    <div className="flex flex-row items-center justify-center gap-x-8 rounded-lg p-3 w-full">
                        <div className="cursor-pointer transform transition-all duration-500  hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#ffffff">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.708h-3.186v-3.62h3.186V8.413c0-3.157 1.927-4.873 4.743-4.873 1.344 0 2.498.1 2.834.144v3.3h-1.941c-1.524 0-1.822.726-1.822 1.792v2.352h3.662l-.477 3.62h-3.185V24h6.25c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </div>

                        <div className="cursor-pointer transform transition-all duration-500  hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#ffffff">
                                <path d="M22.46 6.011c-.81.36-1.68.602-2.59.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0 .61 5.35c-.75-.02-1.49-.23-2.12-.57v.05a4.515 4.515 0 0 0 3.62 4.425c-.69.19-1.42.29-2.17.29-.53 0-1.05-.05-1.56-.14 1.06 3.31 4.13 5.72 7.76 5.79a9.09 9.09 0 0 1-5.64 1.94c-.37 0-.72-.02-1.08-.05 2.01 1.28 4.4 2.03 6.96 2.03 8.35 0 12.92-6.91 12.92-12.92 0-.2 0-.39-.01-.58.89-.63 1.66-1.43 2.28-2.33z" />
                            </svg>
                        </div>

                        <span className="font-bold text-[#ffffff] float-right">© 2023 EcoFood. Tous droits réservés.</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default Footer;