import { useContext, useEffect } from "react"
import AddressForm from "../../../components/profil/form/addressForm/AddressForm"
import { myUserContext } from "../../../context/MyUserContextProvider"
import update from "../../../services/update.account";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyAddress() {
    const { profil, setProfil, user } = useContext(myUserContext);

    const handleAddressValide = async (value) => {
        const updateProfil = {
            ...profil,
            userId: user.id_user,
            address: value.address,
            postal_code: value.postal_code,
            city: value.city,
            state: value.state
        };

        await update.address(updateProfil);
        setProfil(updateProfil);
        toast("Le formulaire est valide !");

    }

    return (
        <div className="max-w-4xl h-screen mx-auto bg-slate-100 p-10">
            <div className="flex flex-col gap-y-3 mb-5">
                <h2 className="text-slate-600 text-3xl font-semibold">Mon adresse</h2>
                <span className="text-slate-600 text-xl ">Adresse de facturation</span>
            </div>
            <div className="w-full  bg-white border border-1 border-slate-200 shadow-lg">
                <AddressForm profil={profil} submit={handleAddressValide} />

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
    )
}