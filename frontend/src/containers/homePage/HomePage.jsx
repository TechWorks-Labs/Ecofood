import { Component } from 'react'
import Header from '../../components/header/Header';
import Presentation from '../../components/homepage/Presentation';
import Carousel from '../../components/homepage/Carousel';

class HomePage extends Component {
    render() {
        return (
            <div className="h-[2000px]">
                <Header />
                <Presentation />
                <Carousel />
            </div>
        )
    }
}

export default HomePage;