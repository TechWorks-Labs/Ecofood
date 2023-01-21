import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SignUpPage from './signUpPage/SignUpPage';

class Site extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/mon-compte/creer-mon-compte" exact element={<SignUpPage />} />
                <Route path="*" element={<span>ERROR 404</span>} />   
            </Routes>
        )
    }
}

export default Site;