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

class Site extends Component {
    render() {
        return (
            <AllProvider>
                <Header />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/boutique" exact element={<Boutique />} />
                    <Route path="/signin" exact element={<SignIn/>} />
                    <Route path="/mon-compte/creer-mon-compte" exact element={<SignUp />} />
                    <Route path="/account" exact element={<Account />} />
                    <Route path="/account/myprofil" exact element={<MyProfil />} />
                    <Route path="/account/myaddress" exact element={<MyAddress />} />
                    <Route path="/account/myCart" exact element={<MyCart />} />
                    <Route path="*" element={<span>ERROR 404</span>} />   
                </Routes>
            </AllProvider>
        )
    }
}

export default Site;