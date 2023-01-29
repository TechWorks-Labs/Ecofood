import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SignUp from './signUpPage/SignUpPage';
import SignIn from './signInPage/SignInPage';
import MyUserContextProvider from '../context/MyUserContextProvider';

class Site extends Component {
    render() {
        return (
            <MyUserContextProvider>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
<<<<<<< HEAD
=======
                    <Route path="/signin" exact element={<SignIn/>} />
                    <Route path="/mon-compte/creer-mon-compte" exact element={<SignUp />} />
>>>>>>> 305a4a16de21b927128c052e90c44e2d1697d574
                    <Route path="*" element={<span>ERROR 404</span>} />   
                </Routes>
            </MyUserContextProvider>
        )
    }
}

export default Site;