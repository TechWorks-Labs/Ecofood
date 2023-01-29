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
                    <Route path="/signin" exact element={<SignIn/>} />
                    <Route path="/mon-compte/creer-mon-compte" exact element={<SignUp />} />
                    <Route path="*" element={<span>ERROR 404</span>} />   
                </Routes>
            </MyUserContextProvider>
        )
    }
}

export default Site;