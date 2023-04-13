import arrow from '../../../assets/images/icons/list.svg'
import Order from '../../../components/account/myOrders/Order';
import ButtonAccount from "../../../components/button/ButtonAccount";

export default function MyOrders() {

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
        <div className="grow w-full max-w-4xl flex mx-auto p-10">
            <div className="flex flex-col items-center w-full">
                <h2 className='font-bold text-2xl mb-5'>MES COMMANDES </h2>
                <Orders />
               
                    <div className='self-end mt-5'>
                        <ButtonAccount />
                    </div>
          
            </div>
        </div>
    )
}