
export default function CurrentAddress(props){
    return(
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
                <span className="font-bold text-lg">Adresse :</span> 
                <span>{(props.profil.address).toUpperCase()}</span>
                <span>{props.profil.postal} {(props.profil.city).toUpperCase()}</span>                           
            </div> 
            <div className="flex flex-col">
                <span className="font-bold text-lg">Pays :</span> 
                <span> {(props.profil.state).toUpperCase()}</span>
            </div> 
            <label className="flex justify-center items-center border border-1 border-slate-300 text-sm text-slate-800 rounded-lg w-[200px] p-1 h-[40px] font-semibold mt-2 hover:cursor-pointer">
                <input type="radio" hidden onClick={props.onClick}/>
                Modifier mon adresse
            </label>
        </div>
    )
}