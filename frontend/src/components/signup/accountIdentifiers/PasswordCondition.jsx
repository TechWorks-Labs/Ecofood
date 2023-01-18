export default function PasswordConditions() {
    
    function CloseCircleSVG() {
        return (
        <svg width="15" height="15">
            <circle cx="7.5" cy="7.5" r="7" fill="none" stroke="red"/>
            <line x1="5.25" y1="5.25" x2="9.75" y2="9.75" stroke="red" strokeWidth="1"/>
            <line x1="9.75" y1="5.25" x2="5.25" y2="9.75" stroke="red" strokeWidth="1"/>
        </svg>
        );
      }

    return(
         <div className="w-full flex flex-col justify-around mt-5 gap-y-5">
           <span>Votre mot de passe doit avoir au minimum : </span>
            <div className="hidden sm:inline-flex">
                <ul className="list-none w-full flex flex-col gap-y-1">
                    <div className="flex flex-row items-center">
                        <CloseCircleSVG />
                        <li className="ml-2">8 caractères minimum</li>
                    </div>
                    <div className="flex flex-row items-center">
                        <CloseCircleSVG />
                        <li className="ml-2">1 Majuscule</li>
                    </div>
                    <div className="flex flex-row items-center">
                        <CloseCircleSVG />
                        <li className="ml-2">1 Minuscule</li>
                    </div>
                    <div className="flex flex-row items-center">
                        <CloseCircleSVG />
                        <li className="ml-2">1 Chiffre</li>
                    </div>
                    <div className="flex flex-row items-center">
                        <CloseCircleSVG />
                        <li className="ml-2">1 caractère spécial (@,!,& ...)</li>
                    </div>
                </ul>
            </div>

                <div className=" w-full flex flex-col justify-center">
                    <span className="font-bold text-md">Politique de données personnelles</span>
                    <span className="text-sm text-slate-700">Les champs marqués d’un astérisque sont obligatoires. A défaut, votre demande d’inscription ne sera pas être prise en compte.</span>
                </div>

                <div className="w-full h-[1px] bg-slate-200 flex flex-row mb-3"></div>
         </div>   
        )
}