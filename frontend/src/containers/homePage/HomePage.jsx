import HeroBanner from '../../components/homepage/HeroBanner';
import CarouselsContainer from '../../components/homepage/carrousel/CarouselsContainer';
import Footer from '../../components/footer/Footer';
import ProductsProvider from '../../context/ProductsProvider';
export default function HomePage() {

        return (
                <ProductsProvider>
                        <HeroBanner />
                        <CarouselsContainer />
                </ProductsProvider>
        )
}
