import banane from "/src/assets/images/products/banane.png";
import { useLocation } from "react-router-dom";
import ButtonShop from '../../components/button/ButtonShop'
import ButtonCustom from '../../components/button/ButtonCustom';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Product(props) {
    
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state;

    const priceByKg = ((parseInt(product.price) * 1000) / parseInt(product.weight));

    const handleReturn = () => {
        navigate(-1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container max-w-5xl flex flex-col gap-y-5 mx-auto mt-[50px]">
            <div className="max-w-5xl flex flex-col gap-y-3 mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="flex justify-center items-center border border-1 border-slate-200 rounded-lg p-1 w-[140px]">
                        <span className="text-sm text-slate-800 ">Catégorie : {product.type}</span>
                    </div>
                    <div className="w-[90px]">
                        <ButtonCustom title='retour' onClick={handleReturn} />
                    </div>

                </div>

                <div className="flex flex-row gap-x-3 h-[350px]">
                    <div className="flex flex-col gap-y-10 border border-1 border-slate-100 shadow-lg p-5">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={banane} className="w-[180px]" />
                        </div>
                        <div className="flex flex-row gap-x-3 items-center justify-center">
                            <ButtonShop width='w-full' title={'Mettre dans le panier'} id_product={product.id_product} product={product} />
                            <div className="flex flex-col justify-center items-center w-[130px] border border-1 slate-100 rounded-lg ">
                                <span className="text-lg font-bold">{product.price}€</span>
                                <span className="text-sm font-normal">{priceByKg} €/Kg</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col border border-1 border-slate-200 shadow-lg p-3 relative">
                        <div className="flex flex-1 flex-col  gap-y-2">
                            <span className="text-2xl font-semibold">{product.brand_name}</span>
                            <span className="text-xl font-bold">{product.name}</span>
                            <span>Produits d'origine : {product.origin_name}</span>
                            <span>Découvrez notre sélection de {product.type.toLowerCase()}s éco-responsables et
                                {
                                    product.type === 'Viande' ? <span> locales, cultivées, </span> : <span> locaux, cultivés, </span>
                                }
                                dans des exploitations locales respectueuses de l'environnement. En choisissant nos fruits, vous soutenez l'agriculture durable tout en profitant d'une saveur authentique et fraîche.</span>
                        </div>
                        <div className="flex h-[25px] text-sm text-slate-800 font-semibold">Tous nos produits sont éco-responsables et issue d'une agriculture raisonnée.</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-7 w-full">
                <div className="flex flex-col shadow-md p-7">
                    <span className="text-xl font-semibold underline underline-offset-2">Description</span>
                    <span className="text-md">{product.description}</span>
                </div>
                <div className="flex flex-col shadow-md p-7">
                    <span className="text-xl font-semibold underline underline-offset-2">Origine</span>
                    <span className="text-md">{product.origin_description}</span>
                </div>
                <div className="flex flex-col shadow-md p-7">
                    <span className="text-xl font-semibold underline underline-offset-2">Composition</span>
                    <span className="text-md">{product.composition}</span>
                </div>
                <div className="flex flex-col shadow-md p-7">
                    <span className="text-xl font-semibold underline underline-offset-2">Nutrition</span>
                    <span className="text-md">{product.nutrition}</span>
                </div>
            </div>
        </div>
    )
}