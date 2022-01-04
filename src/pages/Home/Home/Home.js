import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigarion from '../../Sheard/Navigation/Navigarion';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Navigarion></Navigarion>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </>
    );
};

export default Home;