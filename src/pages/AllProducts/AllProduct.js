// import necessary file 
import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Navigarion from '../Sheard/Navigation/Navigarion';

// All Products Component 
const AllProduct = () => {
    return (
        <>
            <Navigarion></Navigarion>

            <div className="product-area">
                <div className="container">
                    <div className="row">
                        <h2>This is products Area..</h2>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default AllProduct;