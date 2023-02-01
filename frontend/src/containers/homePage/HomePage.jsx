import { Component } from 'react'
import Header from '../../components/header/Header';
import Presentation from '../../components/homepage/Presentation';
import CarouselsContainer from '../../components/homepage/CarouselsContainer';
import Footer from '../../components/footer/footer';
import MyApiContextProvider from '../../context/MyApiContextProvider';
import authService from '../../services/auth.service';
import { useContext } from 'react';
import { myUserContext } from '../../context/MyUserContextProvider';

export default function HomePage(){

        return (
             <MyApiContextProvider>
                <Presentation />
                <CarouselsContainer />
                <Footer />
             </MyApiContextProvider> 
        )
}
