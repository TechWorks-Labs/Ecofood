import banane from "/src/assets/images/products/banane.png";
import { useLocation } from "react-router-dom";
import ButtonShop from '../../components/button/ButtonShop'
import ButtonCustom from '../../components/button/ButtonCustom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Product(props){
    const navigate = useNavigate();

    const handleReturnButton = () => {
        navigate(-1);
    }

    const location = useLocation();
    const product = location.state;
    const priceByKg = ((parseInt(product.price) * 1000)/parseInt(product.weight));

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div className="max-w-5xl flex flex-col gap-y-5 h-screen mx-auto mt-[25px]">
            <div className="max-w-5xl flex flex-col gap-y-3 mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="flex justify-center items-center border border-1 border-slate-200 rounded-lg p-1 w-[140px]">
                        <span className="text-sm text-slate-800 ">Catégorie : {product.type}</span>
                    </div>
                    <ButtonCustom title='retour' onClick={handleReturnButton}/>
                </div>

                <div className="flex flex-row gap-x-3 h-[350px]">
                    <div className="flex flex-col gap-y-10 border border-1 border-slate-100 shadow-lg p-5">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={banane} className="w-[180px]"/>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center justify-center">
                            <ButtonShop width='w-full' title={'Mettre dans le panier'} id_product = {product.id_product} product={product}/>
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
                        <div className="flex items-center justify-center border border-1 border-slate-100 h-[25px] bg-green-300 text-white font-semibold">eco-responsable</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-5 w-full">
                <div className="flex flex-col">
                    <span className="text-xl font-semibold">Description</span>
                    <span className="text-md">{product.description}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-semibold">Origine</span>
                    <span className="text-md">{product.origin_description}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-semibold">Composition</span>
                    <span className="text-md">{product.composition}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-semibold">Nutrition</span>
                    <span className="text-md">{product.nutrition}</span>
                </div>
            </div>
        </div>
    )
}