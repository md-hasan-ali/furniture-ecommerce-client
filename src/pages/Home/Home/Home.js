// Import Necessary file 
import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigarion from '../../Sheard/Navigation/Navigarion';
import Banner from '../Banner/Banner';
import NewArivel from '../NweArivals/NewArivel';
import Products from '../Products/Products';
import Review from '../Review/Review';

// Home Functional Component 
const Home = () => {
    return (
        <>
            <Navigarion></Navigarion>
            <Banner></Banner>
            <Products></Products>
            <NewArivel></NewArivel>
            <Review></Review>
            <Footer></Footer>
        </>
    );
};

export default Home;