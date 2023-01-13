import { Component } from 'react'
import Header from '../../components/header/Header';
import Presentation from '../../components/homepage/Presentation';
import CarouselsContainer from '../../components/homepage/CarouselsContainer';
import Footer from '../../components/footer/footer';
import MyApiContextProvider from '../../context/MyApiContextProvider';

class HomePage extends Component {



    render() {
        return (
             <MyApiContextProvider>
                <Header />
                <Presentation />
                <CarouselsContainer />
                <Footer />
             </MyApiContextProvider> 
        )
    }
}

export default HomePage;