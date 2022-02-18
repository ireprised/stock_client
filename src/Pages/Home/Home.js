import React from 'react';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Feature/>
            <Footer/>
        </div>
    );
};

export default Home;