import { Link } from "react-router-dom";
export default function ProfilCard(props){

  

    return(
        <Link to={props.path}>
            <div className="h-[200px] rounded-lg shadow-lg bg-white flex justify-center items-center  ease-out transition-all hover:ease-out hover:duration-500 hover:bg-gradient-to-r from-orange-100 to-red-100 hover:-translate-y-5 hover:scale-105">
                <div className="flex flex-col justify-center items-center">
                    <img src={props.image} className="w-[70px]"/>
                    <span className="font-semibold text-xl">{props.name}</span>
                </div>
            </div>
        </Link>
    )
}