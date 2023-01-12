import { Component } from 'react'
import Header from '../../components/header/Header';
import Presentation from '../../components/homepage/Presentation';
import CarouselsContainer from '../../components/homepage/CarouselsContainer';
import MyContextProvider from '../../context/MyContextProvider';

class HomePage extends Component {



    render() {
        return (
            <div className="">
                <MyContextProvider>
                    <Header />
                    <Presentation />
                    <CarouselsContainer />
                </MyContextProvider>
            </div>
        )
    }
}

export default HomePage;