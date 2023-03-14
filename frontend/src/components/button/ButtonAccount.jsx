import { Link } from "react-router-dom";

export default function ButtonAccount(props) {
    return (
        <Link to={"/account"} >
            <button type='submit' onClick={props.handleSubmit} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-white p-1 rounded-md text-slate-800  border border-1 border-slate-400 font-medium hover:duration-300 hover:bg-slate-800 hover:text-white">Retour</button>
        </Link>
    )
}