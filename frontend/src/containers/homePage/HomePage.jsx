import { Component } from 'react'
import Header from '../../components/header/Header';
import Presentation from '../../components/homepage/Presentation';
<<<<<<< HEAD
import Carousel from '../../components/homepage/Carousel';
=======
import CarouselsContainer from '../../components/homepage/CarouselsContainer';
import Footer from '../../components/footer/footer';
import MyApiContextProvider from '../../context/MyApiContextProvider';
import authService from '../../services/auth.service';
import { useContext } from 'react';
import { myUserContext } from '../../context/MyUserContextProvider';

export default function HomePage(){
>>>>>>> 305a4a16de21b927128c052e90c44e2d1697d574

        return (
<<<<<<< HEAD
            <div className="h-[2000px]">
                <Header />
                <Presentation />
                <Carousel />
            </div>
=======
             <MyApiContextProvider>
                <Header />
                <Presentation />
                <CarouselsContainer />
                <Footer />
             </MyApiContextProvider> 
>>>>>>> 305a4a16de21b927128c052e90c44e2d1697d574
        )
}
