// Import Necessary file 
import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Navigarion from '../Sheard/Navigation/Navigarion';
import contactimg from '../../images/sofa11.jpg';
import './Contact.css'

// create Contact Functional component 
const Contact = () => {
    return (
        <>
            <Navigarion></Navigarion>

            <div className='contact-area py-5 mt-5'>
                <div className="container">
                    <div className="section-title text-white text-center pb-5">
                        <h2>Contact <span className='text-style'>US</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form action="">
                                    <input type="text" placeholder='Frist Name' />
                                    <input type="text" placeholder='Last Name' />
                                    <input type="email" placeholder='Your Email Address' />
                                    <input type="password" placeholder='Your Password' />
                                    <textarea cols="30" rows="5" placeholder='Your Valueable Message'></textarea>
                                    <button className='btn btn-success box-button' type="submit">Send Message!!</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-image">
                                <img src={contactimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Contact;