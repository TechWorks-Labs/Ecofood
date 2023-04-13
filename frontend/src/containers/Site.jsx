import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SignUp from './signUpPage/SignUpPage';
import SignIn from './signInPage/SignInPage';
import AllProvider from '../context/AllProviders';
import Header from '../components/header/Header';
import Boutique from './boutique/Boutique';
import Account from './account/Account';
import MyProfil from './account/myProfil/MyProfil';
import MyAddress from './account/myAddress/MyAddress';
import MyCart from './account/myCart/MyCart';
import Checkout from './account/checkout/checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequireAuth } from '../services/auth.token';
import PaymentPage from './account/checkout/PaymentPage';
import Product from './product/Product';
import MyOrders from './account/myOrders/MyOrders';
import Footer from '../components/footer/Footer';

class Site extends Component {
    render() {
        return (
            <AllProvider>
                <Header />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/boutique" exact element={<Boutique />} />
                    <Route path="/signin" exact element={<SignIn />} />
                    <Route path="/mon-compte/creer-mon-compte" exact element={<SignUp />} />
                    <Route path="/account" exact element={<RequireAuth><Account /></RequireAuth>} />
                    <Route path="/account/myprofil" exact element={<RequireAuth><MyProfil /></RequireAuth>} />
                    <Route path="/account/myaddress" exact element={<RequireAuth><MyAddress /></RequireAuth>} />
                    <Route path="/account/mycart" exact element={<RequireAuth><MyCart /></RequireAuth>} />
                    <Route path="/product" exact element={<Product />} />
                    <Route path="/checkout" exact element={<RequireAuth><Checkout /></RequireAuth>} />
                    <Route path="/paymentpage" exact element={<RequireAuth><PaymentPage /></RequireAuth>} />
                    <Route path="/account/myorders" exact element={<RequireAuth><MyOrders /></RequireAuth>} />
                    <Route path="*" element={<span>ERROR 404</span>} />
                </Routes>
                <Footer />

                {/* <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    theme="colored"
                /> */}
            </AllProvider>
        )
    }
}

export default Site;