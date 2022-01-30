// Import Necessary file 
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import Navigarion from '../Sheard/Navigation/Navigarion';
import aboutImg from '../../images/awesome-furniture.jpg'
import './About.css'

// About functional Component 
const About = () => {
    return (
        <>
            <Navigarion></Navigarion>

            <Container className='about-area'>
                <div className="section-title text-center">
                    <h2 className='pb-4'>About <span className='text-style'>Me</span></h2>
                </div>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <div className="about-content">
                            <h2><span className='text-highlight'>About</span> Me!!!</h2>
                            <p>Furniture.com gathers thousands of quality pieces in one place to make browsing, comparing and coordinating simpler than ever. Our curated collection of sofas, dining tables, bedroom sets, patio furniture, accents and more will connect you with just what you want in a snap. Tired of the endless hunt for the perfect shade or the right size?Tired of the endless hunt for the perfect shade or the right size?</p>
                            <Link to='/contact'>
                                <button className='btn btn-success box-button'>Contact Me!!</button>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="about-image text-center">
                            <img src={aboutImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default About;