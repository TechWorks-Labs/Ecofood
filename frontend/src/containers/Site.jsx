import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';

class Site extends Component {
    render() {
        return (
            <Routes>
                <Route path="/homepage" exact element={<HomePage />} />
                <Route path="*" element={<span>ERROR 404</span>} />   
            </Routes>
        )
    }
}

export default Site;