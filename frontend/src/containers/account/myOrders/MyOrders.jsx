import arrow from '../../../assets/images/icons/list.svg'
import Order from '../../../components/account/myOrders/Order';
import { useEffect, useRef, useContext } from 'react';
import { AllContext } from '../../../context/AllProviders';

export default function MyOrders() {

    const { bodyHeight } = useContext(AllContext);
    const containerRef = useRef();

    const updateHeightContainer = () => {
        if (containerRef.current.offsetHeight < bodyHeight) {
            let heightContainer = bodyHeight - 50 + 'px';
            containerRef.current.style.height = heightContainer;
        }
    }

    useEffect(() => {
        updateHeightContainer();
    }, [])

    const orders = JSON.parse(localStorage.getItem('ordersUser'));
    const Orders = () => {
        return orders.map((order, key) => {
            let regex = 'r"\s\d{2}:\d{2}:\d{2}"'
            let date = order.date.replace(/\s\d{2}:\d{2}:\d{2}/, "")
            return (
                <Order key={key} order={order} />
            )
        })
    }

    return (
        <div ref={containerRef} className="min-w-2xl max-w-5xl flex mx-auto mt-[50px] p-5 border border-1 border-slate-200 shadow-lg">
            <div className="flex flex-col items-center w-full p-5">
                <h2 className='font-bold text-2xl mb-5'>MES COMMANDES </h2>
                <Orders />
            </div>
        </div>
    )
}