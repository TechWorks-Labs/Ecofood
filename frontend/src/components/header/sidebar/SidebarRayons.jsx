import { useState } from "react"
import { myContext } from "../../../context/MyApiContextProvider";
import { useContext } from "react";
import Filter from "./Filter";

export default function SidebarRayons(props){
    const rayons = ["Fruit","Légume", "Viande"];

    const getBrandNames = (brand) => {
        let array = []
        brand.forEach(element => {
            array.push(element.name);
        });
        return array;
    }

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
        <div className={ props.isToggle ?
             `z-50 transition-all duration-300 ease-in-out absolute top-[67px] left-0 w-[300px] h-screen bg-slate-200 border border-slate-300 border-1`
            : 
            `z-50 transition-all duration-300 ease-in-out absolute top-[67px] translate-x-[-100%] left-0 w-[300px] h-screen bg-slate-200 border-slate-300 border-1`}>
            <Filter name="Rayons" listInput={rayons} listLength={rayons.length} />
        </div>
    )
}