import { Link } from "react-router-dom";

export default function DropdownMenuItem(props) {

    const HandleLinkTo = (route, text) => {
        return (
            <Link to={route}
                onClick={props.HandleToggle}
                className="font-semibold text-xl text-black group-hover:text-white">
                {text}
            </Link>)
    }

    return (
        <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-3 duration-5000 hover:bg-slate-800 group">
            {HandleLinkTo(props.route, props.text)}
        </div>
    )
}