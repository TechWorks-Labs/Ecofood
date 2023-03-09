import { useContext, useEffect, useState } from "react"
import { myUserContext } from "../../../../context/MyUserContextProvider"
import CurrentAddress from "./CurrentAddress";
import { Field, withFormik } from "formik";
import * as Yup from 'yup';

function AddressForm(props) {
    const { profil, user } = useContext(myUserContext)
    const [profilIsLoading, setProfilIsLoading] = useState(false);
    const [modifyAddress, setModifyAddress] = useState(false);

    const handleModifyAddress = () => {
        setModifyAddress(!modifyAddress);
    }


    useEffect(() => {
        if (Object.keys(profil).length !== 0) {
            setProfilIsLoading(true);
        }
    }, [profil])

    return (
        <div>
            <div className="p-10">
                {profilIsLoading && !modifyAddress ?
                    <CurrentAddress profil={profil} onClick={handleModifyAddress} />
                    :
                    <div className="w-full flex flex-col gap-y-4">
                        <h2 className="font-bold text-3xl">Adresse de facturation</h2>
                        <div>
                            <label className="text-lg" htmlFor="Address">Adresse *</label>
                            <input type="text" className="w-full pl-2 border border-1 border-slate-300 h-[35px] rounded-md"
                                name="address"
                                onChange={props.handleChange}
                                value={props.values.address}
                                onBlur={props.handleBlur}
                            />
                        </div>
                        <div className="flex flex-row gap-x-10">
                            <div>
                                <label className="text-lg" htmlFor="postal_code">Code postal *</label>
                                <input type="number" className="w-full pl-2 border border-1 border-slate-300 h-[35px] rounded-md"
                                    name="postal_code"
                                    onChange={props.handleChange}
                                    value={props.values.postal_code}
                                    onBlur={props.handleBlur} />
                            </div>
                            <div>
                                <label className="text-lg" htmlFor="city">Ville *</label>
                                <input type="text" className="w-full pl-2 border border-1 border-slate-300 h-[35px] rounded-md"
                                    name="city"
                                    onChange={props.handleChange}
                                    value={props.values.city}
                                    onBlur={props.handleBlur} />
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <label className="text-lg" htmlFor="state">Pays *</label>
                            <input type="text" className="w-1/2 pl-2 border border-1 border-slate-300 h-[35px] rounded-md"
                                name="state"
                                onChange={props.handleChange}
                                value={props.values.state}
                                onBlur={props.handleBlur} />
                        </div>
                        <div className="flex flex-row justify-between">
                            <button type='submit' onClick={handleModifyAddress} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-red-500 p-1 rounded-md text-white font-medium">Annuler</button>
                            <button type='submit' onClick={props.handleSubmit} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-slate-800 p-1 rounded-md text-white font-medium">Valider</button>
                        </div>
                    </div>
                }
            </div>
            <form className="p-10">

            </form>
        </div>
    )
}

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        address: props.profil.address,
        postal_code: props.profil.postal_code,
        city: props.profil.city,
        state: props.profil.state
    }),
    validationSchema: Yup.object().shape({


    }),
    handleSubmit: (values, { props }) => {
        const Address = {
            address: values.address,
            postal_code: values.postal_code,
            city: values.city, 
            state: values.state
        };
        props.submit(Address);
    },
})(AddressForm);
