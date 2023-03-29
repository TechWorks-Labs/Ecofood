import arrow from '../../../assets/images/icons/list.svg'
import { useState } from 'react'

export default function Order(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="w-full flex flex-col justify-center border border-1 border-slate-200">
            <div className='relative w-full flex flex-col justify-center  md:h-[90px] md:flex md:flex-row md:items-center md:justify-center'>
                <div className='md:flex md:items-center md:justify-center border border-l-0 border-t-0 border-b-0 border-r-1 border-slate-200 p-5 h-[20px]'>
                    <span className="text-sm">{props.order.date}</span>
                </div>
                <div className='md:flex md:items-center md:justify-center border border-l-0 border-t-0 border-b-0 border-r-1 border-slate-200 p-5 h-[20px]'>
                    <span className="text-sm">ECOFOOD</span>
                </div>
                <div className='md:flex md:items-center md:justify-center border border-l-0 border-t-0 border-b-0 border-r-1 border-slate-200 p-5 h-[20px]'>
                    <span className="text-sm font-semibold">N°{props.order.id_order}</span>
                </div>
                <div className='md:flex md:max-w-[60px] md:items-center md:justify-center border border-l-0 border-t-0 border-b-0 border-r-1 border-slate-200 p-5 h-[20px]'>
                    <span className="text-sm">{props.order.total_price}€</span>
                </div>
                <div className='mb-5 md:mb-0 md:flex md:items-center md:justify-center border border-l-0 border-t-0 border-b-0 border-r-1 border-slate-200 p-5 h-[20px]'>
                    <span className="text-sm">Expédié</span>
                </div>

                <div onClick={handleDropdown} className="absolute right-3 md:relative md:flex md:flex-col md:items-center md:justify-center md:p-5 md:h-[20px] md:ml-5">
                    <span className='text-sm'>Détails</span>
                    {dropdownOpen ?
                        <img className='transform transition-all duration-300 -rotate-360' src={arrow}></img>
                        :
                        <img className='transform transition-all duration-300 -rotate-90' src={arrow}></img>
                    }
                </div>
            </div>
            {dropdownOpen ? (
                <div className="h-auto w-full duration-300 transform transition-all overflow-hidden">
                    {props.order.detail.map((detail, key) => {
                        return (
                            <div className="flex flex-row justify-center items-center" key={key}>
                                <div>
                                    <img src={detail.image} className="w-[100px]" alt={detail.name} />
                                </div>
                                <div className="flex flex-col p-2">
                                    <span>produit : {detail.name}</span>
                                    <span>quantité : {detail.quantity}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="h-0 duration-300 transform transition-all"></div>
            )}
        </div>
    )
}