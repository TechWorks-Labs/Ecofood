import { Link } from "react-router-dom";
export default function ProfilCard(props){

  

    return(
        <Link to={props.path}>
            <div className="h-[200px] rounded-lg shadow-lg bg-white flex justify-center items-center ">
                <div className="flex flex-col justify-center items-center">
                    <img src={props.image} className="w-[70px]"/>
                    <span className="font-semibold text-xl">{props.name}</span>
                </div>
            </div>
        </Link>
    )
}