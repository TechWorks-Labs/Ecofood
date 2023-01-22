import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SignUp from './signUpPage/SignUpPage';
import SignIn from './signInPage/SignInPage';

class Site extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/signin" exact element={<SignIn/>} />
                <Route path="/mon-compte/creer-mon-compte" exact element={<SignUp />} />
                <Route path="*" element={<span>ERROR 404</span>} />   
            </Routes>
        )
    }
}

export default Site;