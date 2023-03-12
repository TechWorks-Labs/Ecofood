import Presentation from '../../components/homepage/Presentation';
import CarouselsContainer from '../../components/homepage/CarouselsContainer';
import Footer from '../../components/footer/footer';
import ProductsProvider from '../../context/ProductsProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage(){

        return (
             <ProductsProvider>
                <Presentation />
                <CarouselsContainer />
                <Footer />

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

             </ProductsProvider> 
        )
}
