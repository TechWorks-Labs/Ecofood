import { useState } from "react";
import React, { useRef, useEffect } from "react";

export default function Filter(props){
    const handleModifyStatus = (event) => {
        event.target.classList.toggle("bg-slate-700")
        event.target.classList.toggle("text-white")
    }

    const ListInput = () => {
        return props.listInput.map((item, key) => {
            return(
                <li key={key} className="list-none p-1 hover:bg-slate-400" onClick={(e)=>handleModifyStatus(e)}>{item}</li>)
        })

    }

    useEffect(()=>{

    })

    return(
            <>
                <span className="font-bold text-xl ">{props.brand}</span>

                <div className="flex flex-col w-full p-3">
                    <span className="font-bold text-xl mb-5">{props.name}</span>
                    <div className="flex flex-col gap-y-1 ">
                        {props.listInput.length>0 && <ListInput />}
                    </div>
                </div>
            </>
    )
}