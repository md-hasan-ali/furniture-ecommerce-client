import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Navigarion from '../Sheard/Navigation/Navigarion';

const About = () => {
    return (
        <>
            <Navigarion></Navigarion>

            <div className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>This is About area..</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default About;