import shoppingIcon from '/src/assets/images/icons/shopping-bag.svg';

export default function ButtonCartOfDay(props){
    return(
            <button className={`${props.css} flex flex-row items-center justify-center gap-x-2 p-2 bg-slate-800 w-[200px] h-[40px] rounded-full text-white`}>
                <span className='text-[0.9rem]'>PANIER DU JOUR</span>
                <div className='w-[20px] h-[1px] bg-white'></div>
                <img src={shoppingIcon} className="w-[30px] h-[24px]"></img>
            </button>
        )
}