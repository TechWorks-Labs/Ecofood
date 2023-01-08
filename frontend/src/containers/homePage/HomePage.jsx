import { Component } from 'react'
import Header from '../../components/header/Header';
import Presentation from '../../components/homepage/Presentation';
import CarrouselProduct from '../../components/homepage/CarrouselProducts';

class HomePage extends Component {
    render() {
        return (
            <div className="">
                <Header />
                {/* <Presentation />
                <CarrouselProduct /> */}
            </div>
        )
    }
}

export default HomePage;