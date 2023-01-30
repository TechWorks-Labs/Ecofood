import Header from "../../components/header/Header";
import Filter from "../../components/rayon/filter/Filter";
import { myContext } from "../../context/MyApiContextProvider";
import { useContext } from "react";

export default function Rayon(props){
    const { brand } = useContext(myContext);
    const rayons = ["Fruit","Légume", "Viande"];

    const getBrandNames = (brand) => {
        let array = []
        brand.forEach(element => {
            array.push(element.name);
        });
        return array;
    }
    const listBrand = getBrandNames(brand);
    

    return(
            <>
                <Header />
                <div className="max-w-7xl h-[3000px] bg-slate-200 mx-auto flex flex-row justify-center">
                    <div className="w-[600px] justify-center items-center bg-red-400 fixed left-0">
                        <div className="flex flex-col gap-y-3 items-center w-full sticky top-0">
                            <Filter name="Rayons" listInput={rayons}/>
                            <Filter name="Marques" listInput={listBrand}/>
                        </div>
                    </div>
                    <div className="w-full h-full bg-green-400"></div>
                </div>
            </>
    )
};


{/* <div className="flex flex-col gap-y-3 items-center w-full sticky top-0">
<Filter name="Rayons" listInput={rayons}/>
<Filter name="Marques" listInput={listBrand}/>
</div> */}