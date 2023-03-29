import { useContext } from "react"
import AddressForm from "../../../components/profil/form/addressForm/AddressForm"
import { userContext } from "../../../context/UserProvider"
import update from "../../../services/update.account";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyAddress() {
    const { userDatas, setUserDatas, userToken } = useContext(userContext);

    const handleAddressValide = async (value) => {
        const updateUserDatas = {
            ...userDatas,
            userId: userToken.id_user,
            address: value.address,
            postal_code: value.postal_code,
            city: value.city,
            state: value.state
        };

        await update.address(updateUserDatas);
        setUserDatas(updateUserDatas);
        toast('Profil mis à jour !', {
            position: 'top-right', hideProgressBar: true, autoClose: 1500
        });
    }

    return (
        <div className="container max-w-4xl">
            <div className="grow w-full min-h-full mx-auto bg-slate-100 p-10">
                <div className="w-full flex flex-col gap-y-3 mb-5">
                    <h2 className="text-slate-600 text-3xl font-semibold">Mon adresse</h2>
                    <span className="text-slate-600 text-xl ">Adresse de facturation</span>
                </div>
                <div className="w-full bg-white shadow-lg">
                    <AddressForm userDatas={userDatas} submit={handleAddressValide} />

                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        theme="colored"
                    />

                </div>
            </div>
        </div>

    )
}