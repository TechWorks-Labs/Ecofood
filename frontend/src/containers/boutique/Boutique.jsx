import HeaderBanner from "../../components/boutique/headerBanner/HeaderBanner"
import ProductList from "../../components/boutique/productlist/ProductList"
import ProductCategoryBanner from "../../components/boutique/productlist/productCategoryBanner/ProductCategoryBanner"
export default function Boutique(){

        return (
            <div className="max-w-7xl h-screen mx-auto">
                <HeaderBanner />
                <ProductCategoryBanner />
                <ProductList />
            </div>
        )
}
