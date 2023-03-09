import AddressForm from "../../../components/profil/form/AddressForm"
import { myUserContext } from "../../../context/MyUserContextProvider"

export default function MyAddress(){
    return(
        <div className="max-w-4xl h-screen mx-auto bg-slate-100 p-10">
                <div className="flex flex-col gap-y-3 mb-5">
                    <h2 className="text-slate-600 text-3xl font-semibold">Mon adresse</h2>
                    <span className="text-slate-600 text-xl ">Adresse de facturation</span>
                </div>
            <div className="w-full  bg-white border border-1 border-slate-200 shadow-lg">
                <AddressForm />
            </div>
        </div>
    )
}