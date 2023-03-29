import shoppingIcon from '/src/assets/images/icons/shopping-bag.svg';
import { Link } from 'react-router-dom';
export default function ButtonCartOfDay(props) {
    return (
        <Link to={'/boutique'}>
            <button className={`${props.css} flex flex-row items-center justify-center p-2 bg-slate-800 w-[240px] h-[40px] rounded-xl text-white hover:bg-slate-700`}>
                <span className='text-[0.9rem]'>VISITER LA BOUTIQUE</span>
                <div className='w-[20px] h-[1px] bg-white'></div>
                <img src={shoppingIcon} className="w-[30px] h-[24px]"></img>
            </button>
        </Link>
    )
}