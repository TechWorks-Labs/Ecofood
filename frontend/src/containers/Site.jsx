import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';

class Site extends Component {
    render() {
        return (
            <div className="">
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="*" element={<span>ERROR 404</span>} />   
                </Routes>
            </div>
        )
    }
}

export default Site;