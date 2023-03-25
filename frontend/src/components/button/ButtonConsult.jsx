import { Link } from "react-router-dom";
import { productsContext } from "../../context/ProductsProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function ButtonConsult(props) {
    const navigate = useNavigate();
    const { parameterFilter, setParameterFilter } = useContext(productsContext);

    const handleButton = async () => {
        localStorage.setItem('filterProduct', props.filterProduct);
        await setParameterFilter({ ...parameterFilter, type: props.filterProduct })
        navigate('/boutique')
    }


    return (
        <button onClick={() => handleButton()} className="bg-red-500 w-[160px] h-[45px] text-[0.9rem] p-2 rounded-lg text-white mt-5 duration-500 hover:bg-red-700 hover:duration-500">TOUT CONSULTER</button>
        // <button onClick={() => handleButton()} className="bg-red-500 w-[160px] h-[45px] text-[0.9rem] p-2 rounded-lg text-white mt-5 duration-500 hover:bg-red-700 hover:duration-500">{props.filterProduct}</button>
    )
}