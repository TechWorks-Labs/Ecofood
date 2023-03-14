
export default function CurrentAddress(props){
    console.log("CurrentAddress : ", props.userDatas);
    return(
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
                <span className="font-bold text-lg">Adresse :</span> 
                <span>{(props.userDatas.address).toUpperCase()}</span>
                <span>{props.userDatas.postal} {(props.userDatas.city).toUpperCase()}</span>                           
            </div> 
            <div className="flex flex-col">
                <span className="font-bold text-lg">Pays :</span> 
                <span> {(props.userDatas.state).toUpperCase()}</span>
            </div> 
            <button onClick={props.onClick} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[200px] sm:h-[35px] flex justify-center items-center bg-white p-1 rounded-md text-slate-800  border border-1 border-slate-400 font-medium hover:duration-300 hover:bg-slate-800 hover:text-white">Modifier mon adresse</button>
        </div>
    )
}