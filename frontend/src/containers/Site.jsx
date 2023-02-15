import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SignUp from './signUpPage/SignUpPage';
import SignIn from './signInPage/SignInPage';
import MyUserContextProvider from '../context/MyUserContextProvider';
import Header from '../components/header/Header';
import Boutique from './boutique/Boutique';
import Profil from './profil/Profil';
import ProfilSidebar from '../components/header/profilSidebar/ProfilSideBar';

class Site extends Component {
    render() {
        return (
            <MyUserContextProvider>
                <Header />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/boutique" exact element={<Boutique />} />
                    <Route path="/signin" exact element={<SignIn/>} />
                    <Route path="/mon-compte/creer-mon-compte" exact element={<SignUp />} />
                    <Route path="/profil" exact element={<Profil />} />
                    <Route path="*" element={<span>ERROR 404</span>} />   
                </Routes>
            </MyUserContextProvider>
        )
    }
}

export default Site;