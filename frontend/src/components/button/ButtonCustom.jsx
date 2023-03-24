import { Link } from "react-router-dom";

export default function ButtonCustom(props) {
    return (
        <Link to={props.link} >
            <button onClick={props.onClick} className="w-full h-[45px] mt-3 sm:mt-0 sm:h-[35px] flex justify-center items-center bg-white p-3 rounded-md text-slate-800  border border-1 border-slate-400 font-medium hover:duration-300 hover:bg-slate-800 hover:text-white">{props.title}</button>
        </Link>
    )
}