export default function Filter(props){

    const ListInput = () => {
        return props.listInput.map((item, key) => {
            return(
            <div className="flex flex-row items-center gap-x-2">   
                <input type="checkbox" name={props.name} />
                <label className="" for={props.name}>{item}</ label>            
            </div>)
        })
    }

    return(
            <>
                {/* <div className="flex flex-col justify-center items-center w-full border border-1 border-slate-200 rounded-xl p-2">

                    <span className="font-bold text-xl ">{props.brand}</span>

                    <div className="flex flex-col w-full">
                        <span className="font-bold text-xl mb-5">{props.name}</span>
                        <div className="flex flex-col gap-y-1 ">
                            <ListInput />
                        </div>
                    </div>

                </div>             */}
            </>
    )
}